export interface CustomError {
    response: {
        data: {
            message: string;
        },
        status: number;
        statusText: string;
    },
    status: number;
    message: string;
    name: string;
    code: string;
}