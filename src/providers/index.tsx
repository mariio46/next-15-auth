import { AuthUserProvider } from './auth-user-provider';
import { TanstackQueryProvider } from './tanstack-query-provider';
import { ThemeProvider } from './theme-provider';

export default function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <TanstackQueryProvider>
                <AuthUserProvider>{children}</AuthUserProvider>
            </TanstackQueryProvider>
        </ThemeProvider>
    );
}
