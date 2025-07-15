'use client';

import { useChunkErrorHandler } from '@/hooks/useChunkErrorHandler';

const ChunkErrorHandler = () => {
  useChunkErrorHandler();
  
  // This component doesn't render anything, it just handles chunk errors
  return null;
};

export default ChunkErrorHandler; 