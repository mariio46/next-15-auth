import { AuthSidebar } from '@/components/auth-sidebar';
import { AuthShell } from '@/components/auth-sidebar/shell';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AuthSidebar />
            <SidebarInset>
                <AuthShell>{children}</AuthShell>
            </SidebarInset>
        </SidebarProvider>
    );
}
