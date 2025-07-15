'use client';

import { createSafeDynamicImport } from '@/lib/dynamicImport';
import { useState } from 'react';

// Test dynamic import
import type { Props as ApexChartProps } from 'react-apexcharts';
const TestChart = createSafeDynamicImport<ApexChartProps>(
  () => import('react-apexcharts').then(mod => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => <div className="p-4">Loading test chart...</div>,
    fallback: () => <div className="p-4 text-red-500">Failed to load chart</div>,
  }
);

export default function TestChunkPage() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Chunk Loading Test</h1>
      
      <button 
        onClick={() => setShowChart(!showChart)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {showChart ? 'Hide Chart' : 'Load Chart'}
      </button>

      {showChart && (
        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Test Chart Component</h2>
          <TestChart />
        </div>
      )}

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Click &quot;Load Chart&quot; to test dynamic import</li>
          <li>Check browser console for any chunk loading errors</li>
          <li>If errors occur, the page should automatically reload</li>
        </ol>
      </div>
    </div>
  );
} 