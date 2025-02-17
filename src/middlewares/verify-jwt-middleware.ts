import { NextResponse, type NextFetchEvent, type NextRequest } from 'next/server';

import type { CustomMiddleware } from '.';

import { verifyJwt } from '@/lib/server-utils';

export function verifyJwtMiddleware(middleware: CustomMiddleware) {
    return async (request: NextRequest, event: NextFetchEvent) => {
        const response = NextResponse.next();
        const path = request.nextUrl.pathname;

        // console.log('Middleware 3 triggered.');

        const credential = request.cookies.get('credential');

        const payload = await verifyJwt(credential?.value);

        if (path.startsWith('/auth') && !payload) {
            if (request.cookies.has('credential')) {
                request.cookies.delete('credential');
            }
            return NextResponse.redirect(new URL('/login', request.url));
        }

        return middleware(request, event, response);
    };
}
