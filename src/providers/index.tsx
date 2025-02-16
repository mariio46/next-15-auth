import { AuthUserProvider } from './auth-user-provider';
import { TanstackQueryProvider } from './tanstack-query-provider';

export default function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <TanstackQueryProvider>
            <AuthUserProvider>{children}</AuthUserProvider>
        </TanstackQueryProvider>
    );
}
