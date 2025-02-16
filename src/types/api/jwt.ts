type ApiJWTPayload = {
    iss: string;
    iat: number;
    exp: number;
    nbf: number;
    jti: string;
    sub: string;
    prv: string;
    email: string;
    role: string;
};

export type { ApiJWTPayload };
