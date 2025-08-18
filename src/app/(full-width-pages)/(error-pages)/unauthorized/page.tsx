'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ShieldX, ArrowLeft, HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const UnauthorizedPage = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full mx-auto flex items-center justify-center mb-8"
                    >
                        <ShieldX className="w-12 h-12 text-red-600 dark:text-red-400" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Access Denied
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
                    >
                        Sorry, you don&apos;t have permission to access this page. Please contact your administrator if you believe this is a mistake.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-150 ease-in-out"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Go Back
                        </button>

                        <button
                            onClick={() => router.push('/')}
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
                        >
                            <HomeIcon className="w-5 h-5 mr-2" />
                            Go Home
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 text-center text-gray-500 dark:text-gray-400"
                >
                    <p className="text-sm">
                        If you need immediate assistance, please contact support
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default UnauthorizedPage;