import { CustomError } from "@/types/Error";

export const getErrorMsg = (error: unknown): string => {
  if (error && typeof error === 'object') {
    const err = error as CustomError;

    if (err.response?.data?.message) {
      return err.response.data.message;
    }
    if (err.message) {
      return err.message;
    }
  }

  return 'An unexpected error occurred';
};