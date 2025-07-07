// queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2, // Number of retry attempts if a query fails
            refetchOnWindowFocus: false, // Avoid auto-refetching on window focus
        },
    },
});
