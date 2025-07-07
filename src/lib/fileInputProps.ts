import { toast } from "sonner";

export const fileInputProps = (onChange: (file: File) => void) => ({
    type: "file",
    accept: ".pdf,.jpg,.jpeg,.png",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                toast.error("File too large. Must be less than 10MB");
                return;
            }
            onChange(file);
        }
    },
});