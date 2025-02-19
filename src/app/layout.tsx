import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { geistMono, geistSans } from './fonts';

import RootProvider from '@/providers';

import './globals.css';

export const metadata: Metadata = {
    title: 'Next 15 Auth',
    description: 'Next JS 15 Authentication use JWT without third party library.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={cn(geistSans.variable, geistMono.variable)} suppressHydrationWarning>
            <body className='font-sans antialiased' suppressHydrationWarning>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}
