import { format } from "date-fns";

// Format dates consistently
export const formatDate = (date: string | Date | null | undefined) => {
    return date ? format(date, "PPP 'at' p") : "Never";
};