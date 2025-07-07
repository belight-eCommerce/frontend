import { toast } from "sonner";
import { getErrorMsg } from "./getErrorMsg";

export const toastError = (error: unknown, toastId?: string) => {
  const errorMessage = getErrorMsg(error);
  toast.error(errorMessage, { id: toastId });
};