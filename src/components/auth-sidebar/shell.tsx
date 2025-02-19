'use client';

import * as React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeSwitcher } from '../theme-switcher';

interface AuthShellProps {
    children: React.ReactNode;
}

const AuthShell = ({ children }: AuthShellProps) => {
    const paths = usePathname();
    const pathnames = paths.split('/').filter((path) => path);

    return (
        <>
            <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear'>
                <div className='flex w-full items-center gap-2 px-4'>
                    <SidebarTrigger className='-ml-1' />
                    <Separator orientation='vertical' className='mr-2 h-4' />
                    <Breadcrumb>
                        <BreadcrumbList>
                            {pathnames.map((path, index) => {
                                const href = `/${pathnames.slice(0, index + 1).join('/')}`;
                                if (index === 0) return null;
                                return (
                                    <React.Fragment key={index}>
                                        <BreadcrumbItem className='capitalize'>
                                            {pathnames.length === index + 1 ? (
                                                <BreadcrumbPage>{path}</BreadcrumbPage>
                                            ) : (
                                                <BreadcrumbLink asChild>
                                                    <Link href={href}>{path}</Link>
                                                </BreadcrumbLink>
                                            )}
                                        </BreadcrumbItem>
                                        {pathnames.length !== index + 1 && <BreadcrumbSeparator />}
                                    </React.Fragment>
                                );
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className='ml-auto'>
                        <ThemeSwitcher variant='ghost' />
                    </div>
                </div>
            </header>
            <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>{children}</div>
        </>
    );
};

export { AuthShell };
