import { NextResponse, type NextFetchEvent, type NextRequest } from 'next/server';

import type { CustomMiddleware } from '.';

export function redirectMiddleware(middleware: CustomMiddleware) {
    return async (request: NextRequest, event: NextFetchEvent) => {
        const response = NextResponse.next();
        const path = request.nextUrl.pathname;

        // console.log('Middleware 2 triggered.');

        const credential = request.cookies.get('credential');

        if (credential && ['/login', '/register'].includes(path)) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        if (!credential && path.startsWith('/dashboard')) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        return middleware(request, event, response);
    };
}
