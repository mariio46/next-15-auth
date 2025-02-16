import { AuthUserProvider } from './auth-user-provider';
import { SwrConfigProvider } from './swr-provider';

export default function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <SwrConfigProvider>
            <AuthUserProvider>{children}</AuthUserProvider>
        </SwrConfigProvider>
    );
}
