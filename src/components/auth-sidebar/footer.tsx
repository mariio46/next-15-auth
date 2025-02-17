import { useLogoutAction } from '@/actions/client/logout';
import { acronym, cn } from '@/lib/utils';
import { useAuthUserStore } from '@/stores/auth-user-store';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LucideReactIcon } from '@/components/ui/lucide-react-icon';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';

const AuthSidebarFooter = () => {
    const user = useAuthUserStore((state) => state.user);
    const { handleLogout: logout, loading } = useLogoutAction();

    function handleLogout(e: Event) {
        e.preventDefault();
        logout();
    }

    return (
        <SidebarMenu>
            {!user ? (
                <SidebarMenuItem>
                    <div className='flex h-12 items-center gap-2 p-2'>
                        <Skeleton className='size-8 rounded-lg' />
                        <div className='flex flex-col gap-2'>
                            <Skeleton className='h-3.5 w-20 rounded-lg' />
                            <Skeleton className='h-3.5 w-40 rounded-lg' />
                        </div>
                    </div>
                </SidebarMenuItem>
            ) : (
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton
                                size='lg'
                                className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
                                <Avatar className='h-8 w-8 rounded-lg'>
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback className='rounded-lg'>{acronym(user.name)}</AvatarFallback>
                                </Avatar>
                                <div className='grid flex-1 text-left text-sm leading-tight'>
                                    <span className='truncate font-semibold'>{user.name}</span>
                                    <span className='truncate text-xs'>{user.email}</span>
                                </div>
                                <LucideReactIcon name='ChevronsUpDown' className='ml-auto size-4' />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
                            side='bottom'
                            align='end'
                            sideOffset={4}>
                            <DropdownMenuLabel className='p-0 font-normal'>
                                <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                                    <Avatar className='h-8 w-8 rounded-lg'>
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback className='rounded-lg'>acronym(user.name)</AvatarFallback>
                                    </Avatar>
                                    <div className='grid flex-1 text-left text-sm leading-tight'>
                                        <span className='truncate font-semibold'>{user.name}</span>
                                        <span className='truncate text-xs'>{user.email}</span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <LucideReactIcon name='Sparkles' />
                                    Upgrade to Pro
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <LucideReactIcon name='BadgeCheck' />
                                    Account
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LucideReactIcon name='CreditCard' />
                                    Billing
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LucideReactIcon name='Bell' />
                                    Notifications
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={handleLogout} disabled={loading}>
                                <LucideReactIcon
                                    name={loading ? 'Loader' : 'LogOut'}
                                    className={cn(loading && 'animate-spin')}
                                />
                                {loading ? 'Processing...' : 'Log out'}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            )}
        </SidebarMenu>
    );
};

export { AuthSidebarFooter };
