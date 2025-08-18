'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation';
import { selectIsAuth, selectPermissions, UserRole } from '@/store/slices/auth.slice';
import { Loader2 } from 'lucide-react';

interface WithRBACProps {
    allowedRoles?: {
        admin?: boolean;
        seller?: boolean;
        buyer?: boolean;
    };
    requireAuth?: boolean;
    fallbackPath?: string;
}

const AuthenticatingScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-blue-100 dark:border-blue-900 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-16 h-16">
                        <Loader2 className="w-16 h-16 animate-spin text-blue-600 dark:text-blue-400" />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Authenticating
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Please wait while we verify your credentials...
                    </p>
                </div>
            </div>
        </div>
    );
};

const withRBAC = ({
    allowedRoles = {},
    requireAuth = true,
    fallbackPath = '/signin'
}: WithRBACProps = {}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (WrappedComponent: React.ComponentType<any>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const WithRBACWrapper: React.FC<any> = (props) => {
            const router = useRouter();
            const pathname = usePathname();
            const isAuthenticated = useSelector(selectIsAuth);
            const permissions = useSelector(selectPermissions);
            const [isChecking, setIsChecking] = React.useState(true);

            React.useEffect(() => {
                const checkAuth = async () => {
                    setIsChecking(true);

                    // Artificial delay to prevent flash of loading state
                    await new Promise(resolve => setTimeout(resolve, 500));

                    // Check if authentication is required but user is not authenticated
                    if (requireAuth && !isAuthenticated) {
                        sessionStorage.setItem('redirectPath', pathname);
                        router.replace(fallbackPath);
                        return;
                    }

                    // If no specific roles are required, allow access
                    if (Object.keys(allowedRoles).length === 0) {
                        setIsChecking(false);
                        return;
                    }

                    // Check if user has any of the allowed roles
                    const hasRequiredAccess = Object.entries(allowedRoles).some(
                        ([role, isRequired]) => {
                            if (!isRequired) return false;

                            switch (role) {
                                case UserRole.ADMIN:
                                    return permissions.canAccessAdmin;
                                case UserRole.SELLER:
                                    return permissions.canAccessSeller;
                                case UserRole.BUYER:
                                    return permissions.canAccessBuyer;
                                default:
                                    return false;
                            }
                        }
                    );

                    if (!hasRequiredAccess) {
                        router.replace('/unauthorized');
                        return;
                    }

                    setIsChecking(false);
                };

                checkAuth();
            }, [isAuthenticated, permissions, pathname, router]);

            // Show loading state while checking permissions
            if (isChecking || (requireAuth && !isAuthenticated)) {
                return <AuthenticatingScreen />;
            }

            // If all checks pass, render the component
            return <WrappedComponent {...props} />;
        };

        // Display name for debugging purposes
        WithRBACWrapper.displayName = `withRBAC(${WrappedComponent.displayName || WrappedComponent.name || 'Component'
            })`;

        return WithRBACWrapper;
    };
};

export default withRBAC;