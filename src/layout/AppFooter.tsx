import React from 'react';
import Link from 'next/link';

const AppFooter = () => {
    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="px-4 mx-auto max-w-(--breakpoint-2xl)">
                <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
                    <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            © {new Date().getFullYear()} Maalifu. All rights reserved.
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        powered by{' '}
                        <Link
                            href="https://belight-soft.com"
                            target="_blank"
                            className="flex items-center text-brand-600 hover:text-brand-700 dark:text-brand-500 dark:hover:text-brand-400 hover:underline transition-colors"
                        >
                            Belight Software
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;