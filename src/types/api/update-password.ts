import type { ApiResponse, ApiValidationErrorResponse } from '.';

type UpdatePasswordErrorResponse = ApiValidationErrorResponse<{
    current_password?: string[];
    new_password?: string[];
    new_password_confirmation?: string[];
}>;

type UpdatePasswordSuccessResponse = ApiResponse<never>;

export type { UpdatePasswordErrorResponse, UpdatePasswordSuccessResponse };
