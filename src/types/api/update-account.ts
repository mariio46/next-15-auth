import type { ApiResponse, ApiValidationErrorResponse } from '.';
import type { AuthUser } from './auth';

type UpdateAccountErrorResponse = ApiValidationErrorResponse<{
    name?: string[];
    email?: string[];
}>;

type UpdateAccountSuccessResponse = ApiResponse<{
    user: AuthUser;
    authorization: {
        access_token: string;
        token_type: string;
        expires_in: string;
    };
}>;

export type { UpdateAccountErrorResponse, UpdateAccountSuccessResponse };
