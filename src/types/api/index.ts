import type { AxiosError } from 'axios';

type ApiResponse<TData> = {
    message: string;
    data: TData;
};

type ApiValidationErrorResponse<TError extends Record<string, string[]>> = AxiosError<{
    errors?: TError;
}>;

export type { ApiResponse, ApiValidationErrorResponse };
