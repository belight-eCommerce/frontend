'use client';

import { ComponentType } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import { Loader2 } from 'lucide-react';
// import { selectUser } from '@/store/slices/auth.slice';
// import { store } from '@/store/store';
// import { adminOnlyRoutes } from '@/config/adminOnlyRoutes';

export function withAuth<P extends object>(
    WrappedComponent: ComponentType<P>,
) {
    return function WithAuthComponent(props: P) {
        // const router = useRouter();
        // const pathname = usePathname();
        // const user = selectUser(store.getState());

        // useEffect(() => {
        //     // If no user, redirect to signin
        //     if (!user) {
        //         router.replace('/admin/signin');
        //         return;
        //     }

        //     // Check for admin-only routes
        //     if (adminOnlyRoutes.includes(pathname) && !user.isSuperAdmin) {
        //         // Redirect to root page
        //         router.replace('/');
        //         return;
        //     }
        // }, [user, router, pathname]);

        // Show loading state while checking auth
        // if (typeof window !== 'undefined' && (!user || (adminOnlyRoutes.includes(pathname) && !user.isSuperAdmin))) {
        //     return (
        //         <div className="h-screen flex items-center justify-center">
        //             <div className="flex flex-col items-center justify-center py-10">
        //                 <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
        //                 <p className="text-muted-foreground">
        //                     Checking authentication...
        //                 </p>
        //             </div>
        //         </div>
        //     );
        // }

        return <WrappedComponent {...props} />;
    };
}

export default withAuth;