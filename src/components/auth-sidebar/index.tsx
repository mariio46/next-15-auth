'use client';

import * as React from 'react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { ScrollArea } from '../ui/scroll-area';

import { AuthSidebarContent } from './content';
import { AuthSidebarFooter } from './footer';
import { AuthSidebarHeader } from './header';

export function AuthSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant='floating' collapsible='icon' {...props}>
            <SidebarHeader>
                <AuthSidebarHeader />
            </SidebarHeader>
            <ScrollArea
                data-sidebar='content'
                className='flex min-h-0 flex-1 flex-col gap-2 overflow-auto pr-2 group-data-[collapsible=icon]:overflow-hidden'>
                <SidebarContent>
                    <AuthSidebarContent />
                </SidebarContent>
            </ScrollArea>
            <SidebarFooter>
                <AuthSidebarFooter />
            </SidebarFooter>
        </Sidebar>
    );
}
