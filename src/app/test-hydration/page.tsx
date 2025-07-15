'use client';

import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect } from 'react';

export default function TestHydrationPage() {
  const { theme, toggleTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Hydration Test Page</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">Theme Information</h2>
          <p>Current theme: <span className="font-mono">{theme}</span></p>
          <p>Is client rendered: <span className="font-mono">{isClient ? 'true' : 'false'}</span></p>
          <button 
            onClick={toggleTheme}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Toggle Theme
          </button>
        </div>

        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">Body Classes</h2>
          <p className="font-mono text-sm">
            {isClient ? document.body.className : 'Loading...'}
          </p>
        </div>

        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Check the browser console for hydration warnings</li>
            <li>Toggle the theme and verify it works</li>
            <li>Refresh the page and ensure no hydration mismatches</li>
          </ol>
        </div>
      </div>
    </div>
  );
} 