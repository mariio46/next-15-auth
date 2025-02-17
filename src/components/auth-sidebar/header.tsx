import Link from 'next/link';

import { LucideReactIcon } from '../ui/lucide-react-icon';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';

const AuthSidebarHeader = () => {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton size='lg' asChild>
                    <Link href='/'>
                        <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                            <LucideReactIcon name='Command' className='size-4' />
                        </div>
                        <div className='grid flex-1 text-left text-sm leading-tight'>
                            <span className='truncate font-semibold'>Next 15 Auth</span>
                            <span className='truncate text-xs'>Enterprise</span>
                        </div>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
};

export { AuthSidebarHeader };
