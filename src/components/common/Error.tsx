import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";

interface ErrorStateProps {
    message?: string;
    onRetry?: () => void;
}

export const ErrorState = ({
    message = "An error occurred. Please try again later.",
    onRetry
}: ErrorStateProps) => {
    return (
        <Card className="w-full border-destructive/20">
            <CardContent className="flex flex-col items-center justify-center py-10">
                <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{message}</AlertDescription>
                </Alert>

                {onRetry && (
                    <Button
                        onClick={onRetry}
                        variant="outline"
                        className="mt-4"
                    >
                        Try Again
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};