import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { setIsLoggedInCookie } from './app/_lib/auth';

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const credential = request.cookies.get('credential');
    const isLoggedIn = request.cookies.get('isLoggedIn');

    if (!credential && !isLoggedIn) {
        await setIsLoggedInCookie('0');
    }

    if (credential && ['/login', '/register'].includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (!credential && request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return response;
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
