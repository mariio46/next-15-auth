import { AuthSidebar } from '@/components/auth-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AuthSidebar />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    );
}
