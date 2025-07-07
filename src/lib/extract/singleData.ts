import { ListResponse, SingleResponse } from "@/types/Response";

export const extractListData = <T>(response: ListResponse<T>) => response.data;
export const extractSingleData = <T>(response: SingleResponse<T>) => response.data;
export const extractTotalCount = <T>(response: ListResponse<T>) => response.total;