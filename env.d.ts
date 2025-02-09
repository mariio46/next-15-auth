declare namespace NodeJS {
    export interface ProcessEnv {
        // Client
        readonly NEXT_PUBLIC_BASE_APP_URL: string;

        // ------------------------------------------

        // Server
        readonly BASE_API_URL: string;
    }
}
