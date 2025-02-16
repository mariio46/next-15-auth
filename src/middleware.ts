import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { setIsLoggedInCookie } from './lib/server-utils';

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const path = request.nextUrl.pathname;

    const credential = request.cookies.get('credential');
    const isLoggedIn = request.cookies.get('isLoggedIn');

    if (!credential) {
        if (isLoggedIn) {
            await setIsLoggedInCookie('0');
        }
    }

    if (credential && ['/login', '/register'].includes(path)) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (!credential && path.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return response;
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
