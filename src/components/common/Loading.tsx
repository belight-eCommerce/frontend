import { Loader2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface LoadingStateProps {
    message?: string;
}

export const LoadingState = ({ message = "Loading..." }: LoadingStateProps) => {
    return (
        <Card className="w-full">
            <CardContent className="flex flex-col items-center justify-center py-10">
                <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground">{message}</p>
            </CardContent>
        </Card>
    );
};