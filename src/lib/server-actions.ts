'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { deleteCookie } from 'cookies-next/server';

import { axiosServer } from './axios';
import { bearerToken, setIsLoggedInCookie } from './server-utils';

export async function logout() {
    const token = await bearerToken();

    try {
        const { data } = await axiosServer.delete<{ message: string }>('/api/auth/logout', {
            headers: {
                Authorization: token,
            },
        });

        return data.message;
    } catch (error) {
        console.log(error);
    } finally {
        deleteCookie('credential', { cookies });
        setIsLoggedInCookie('0');
        redirect('/');
    }
}
