import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Loader } from "lucide-react";

interface DeleteDialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onDelete: () => void
    deleting: boolean;
    title: string;
    description: string;
}

export function DeleteDialog({ isOpen, setIsOpen, onDelete, title, description, deleting }: DeleteDialogProps) {
    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onDelete} disabled={deleting}>
                        { deleting ? (
                            <>
                                <Loader className="animate-spin mr-2" />
                                Deleting..
                            </>
                        ) : "Delete"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
