import dynamic from 'next/dynamic';
import React from 'react';

export function createSafeDynamicImport<P = unknown>(
  importFn: () => Promise<{ default: React.ComponentType<P> }> ,
  options: {
    ssr?: boolean;
    loading?: React.ComponentType<P>;
    fallback?: React.ComponentType<P>;
  } = {}
) {
  const { ssr = false, loading, fallback } = options;

  return dynamic<P>(
    () =>
      importFn().catch((error) => {
        console.error('Dynamic import failed:', error);

        // If it's a chunk loading error, try to reload the page
        if (error.message.includes('ChunkLoadError') || error.message.includes('Loading chunk')) {
          if (typeof window !== 'undefined') {
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        }

        // Return a fallback component or throw the error
        if (fallback) {
          return Promise.resolve({ default: fallback });
        }
        throw error;
      }),
    {
      ssr,
      loading: loading ? () => React.createElement(loading as React.ComponentType<object>) : undefined,
    }
  );
}