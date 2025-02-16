import { NextResponse, type NextFetchEvent, type NextRequest } from 'next/server';

import type { CustomMiddleware } from '.';

import { setIsLoggedInCookie } from '@/lib/server-utils';

export function checkIsLoggedInCookieMiddleware(middleware: CustomMiddleware) {
    return async (request: NextRequest, event: NextFetchEvent) => {
        const response = NextResponse.next();

        // console.log('Middleware 1 triggered.');

        const credential = request.cookies.get('credential');
        const isLoggedIn = request.cookies.get('isLoggedIn');

        if (!credential && !isLoggedIn) {
            await setIsLoggedInCookie('0');
        } else if (!credential && isLoggedIn && !!Number(isLoggedIn.value)) {
            await setIsLoggedInCookie('0');
        }

        return middleware(request, event, response);
    };
}
