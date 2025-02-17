import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LucideReactIcon } from '../ui/lucide-react-icon';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '../ui/sidebar';

const AuthSidebarContent = () => {
    const pathname = usePathname();

    return (
        <SidebarGroup>
            <SidebarGroupLabel>General</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton isActive={pathname === '/auth/dashboard'} asChild>
                            <Link href='/auth/dashboard'>
                                <LucideReactIcon name='LayoutDashboard' />
                                <span>Dashboard</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton isActive={pathname === '/auth/settings'} asChild>
                            <Link href='/auth/settings'>
                                <LucideReactIcon name='Cog' />
                                <span>Settings</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};

export { AuthSidebarContent };
