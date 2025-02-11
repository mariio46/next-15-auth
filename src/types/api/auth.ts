type Role = {
    id: number;
    name: string;
};

type AuthUser = {
    id: number;
    name: string;
    email: string;
    avatar: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    role: Role;
    permissions: string[];
};

export type { AuthUser };
