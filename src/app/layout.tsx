import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { geistMono, geistSans } from './fonts';

import { SwrConfigProvider } from '@/providers/swr-provider';

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
        <html lang='en' className={cn(geistSans.variable, geistMono.variable)}>
            <body className='font-sans antialiased' suppressHydrationWarning>
                <SwrConfigProvider>{children}</SwrConfigProvider>
            </body>
        </html>
    );
}
