import 'client-only';

import type { AxiosError } from 'axios';

import { useLoading } from '@/hooks/use-loading';
import { axiosClient } from '@/lib/axios';
import { redirectIfUnauthenticated } from '@/lib/client-utils';

export function useLogoutAction() {
    const { loading, startLoading, stopLoading } = useLoading();
    const { handleIfUnauthenticated } = redirectIfUnauthenticated();

    async function handleLogout() {
        startLoading();
        try {
            await axiosClient.delete('/api/logout');
        } catch (e) {
            const error = e as AxiosError;

            console.log(error);
        } finally {
            stopLoading();

            handleIfUnauthenticated();
        }
    }

    return { loading, handleLogout };
}
