import 'client-only';

import { getCookie } from 'cookies-next/client';

export function isLoggedIn(): boolean {
    return !!Number(getCookie('isLoggedIn') ?? 0);
}
