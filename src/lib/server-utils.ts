import 'server-only';

import { cookies } from 'next/headers';

export async function bearerToken() {
    const cookieStore = await cookies();

    const bearerToken = cookieStore.get('credential');

    return bearerToken ? `Bearer ${bearerToken.value}` : '';
}

export async function isAuthenticated() {
    const cookieStore = await cookies();

    const isLoggedIn = cookieStore.get('isLoggedIn');

    return !isLoggedIn ? false : !!Number(isLoggedIn.value);
}
