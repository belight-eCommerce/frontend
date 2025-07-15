'use client';

import { useEffect } from 'react';

export const useChunkErrorHandler = () => {
  useEffect(() => {
    const handleChunkError = (event: ErrorEvent) => {
      const error = event.error;
      
      // Check if it's a chunk loading error
      if (error && (
        error.message.includes('ChunkLoadError') ||
        error.message.includes('Loading chunk') ||
        error.message.includes('Loading CSS chunk') ||
        error.message.includes('webpack')
      )) {
        console.log('Chunk loading error detected:', error.message);
        
        // Clear the chunk cache and reload
        if (typeof window !== 'undefined') {
          // Clear any cached chunks
          if ('caches' in window) {
            caches.keys().then(names => {
              names.forEach(name => {
                if (name.includes('chunk') || name.includes('webpack')) {
                  caches.delete(name);
                }
              });
            });
          }
          
          // Reload the page after a short delay
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }
    };

    // Listen for unhandled errors
    window.addEventListener('error', handleChunkError);
    
    // Listen for unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const error = event.reason;
      if (error && (
        error.message.includes('ChunkLoadError') ||
        error.message.includes('Loading chunk')
      )) {
        console.log('Chunk loading promise rejection:', error.message);
        event.preventDefault();
        
        // Clear cache and reload
        if ('caches' in window) {
          caches.keys().then(names => {
            names.forEach(name => {
              if (name.includes('chunk') || name.includes('webpack')) {
                caches.delete(name);
              }
            });
          });
        }
        
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });

    return () => {
      window.removeEventListener('error', handleChunkError);
    };
  }, []);
}; 