export interface IPagination {
    currentPage: number;
    totalPages: number;
    size: number;
    onPageChange: (page: number) => void;
}