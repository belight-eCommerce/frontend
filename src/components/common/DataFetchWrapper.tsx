import { ReactNode } from "react";
import { LoadingState } from "./Loading";
import { ErrorState } from "./Error";

interface DataFetchWrapperProps {
    isLoading: boolean;
    isError: boolean;
    error: unknown;
    refetch: () => void;
    loadingMessage?: string;
    children: ReactNode;
}

export const DataFetchWrapper = ({
    isLoading,
    isError,
    error,
    refetch,
    loadingMessage = "Loading data...",
    children,
}: DataFetchWrapperProps) => {
    if (isLoading) {
        return <LoadingState message={loadingMessage} />;
    }

    if (isError) {
        return (
            <ErrorState
                message={error instanceof Error ? error.message : "An error occurred while fetching data."}
                onRetry={refetch}
            />
        );
    }

    return <>{children}</>;
};