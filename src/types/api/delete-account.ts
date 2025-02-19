import type { ApiResponse, ApiValidationErrorResponse } from '.';

type DeleteAccountErrorResponse = ApiValidationErrorResponse<{
    password?: string[];
}>;

type DeleteAccountSuccessResponse = ApiResponse<never>;

export type { DeleteAccountErrorResponse, DeleteAccountSuccessResponse };
