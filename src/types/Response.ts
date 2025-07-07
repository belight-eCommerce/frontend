export type SingleResponse<T> = {
    data: T;
}

export type ListResponse<T> = {
    data: T[];
    total: number;
}

