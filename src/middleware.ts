import { chain } from './middlewares';
import { checkIsLoggedInCookieMiddleware } from './middlewares/check-is-logged-in-cookie-middleware';
import { redirectMiddleware } from './middlewares/redirect-middleware';
import { verifyJwtMiddleware } from './middlewares/verify-jwt-middleware';

export default chain([checkIsLoggedInCookieMiddleware, redirectMiddleware, verifyJwtMiddleware]);

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
