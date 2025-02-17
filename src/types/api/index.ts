type ApiResponse<TData> = {
    message: string;
    data: TData;
};

type ApiValidationErrorResponse<TError extends Record<string, string[]>> = {
    errors?: TError;
};

export type { ApiResponse, ApiValidationErrorResponse };
