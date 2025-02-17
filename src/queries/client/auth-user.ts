import 'client-only';

import * as React from 'react';

import { useQuery } from '@tanstack/react-query';

import type { AuthUser } from '@/types/api/auth';

import { axiosClient } from '@/lib/axios';
import { isLoggedIn } from '@/lib/client-utils';
import { useAuthUserStore } from '@/stores/auth-user-store';

async function getAuthUser() {
    return await axiosClient.get<{ user: AuthUser }>('/api/auth-user').then((res) => res.data);
}

/* eslint react-hooks/exhaustive-deps: 0 */
export const useQueryAuthUser = () => {
    const lastUpdatedRef = React.useRef<number | null>(null);

    const setAuth = useAuthUserStore((state) => state.setAuth);

    const query = useQuery({
        queryKey: ['auth-user'],
        queryFn: getAuthUser,
        enabled: isLoggedIn(),
        retry: (failureCount, error) => {
            if (error.status === 401) {
                return false;
            }
            return failureCount < 3; // Retry maksimal 3 kali untuk error selain 401
        },
        retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
    });

    React.useEffect(() => {
        if (query.dataUpdatedAt && query.dataUpdatedAt !== lastUpdatedRef.current) {
            lastUpdatedRef.current = query.dataUpdatedAt;

            if (query.isSuccess) {
                // console.log('Triggered Conditional 1 Success');
                setAuth({ user: query.data.user, status: 'authenticated' });
            } else if (query.isError) {
                // console.log('Triggered Conditional 2 Error');
                setAuth({ user: undefined, status: 'unauthenticated' });
            }
        }

        // Conditional 3: Jika query tidak berjalan (tidak fetching & tidak ada data/error)
        if (!query.isFetching && !query.data && !query.error) {
            // console.log('Triggered Conditional 3 Not Fetching');
            setAuth({ user: undefined, status: 'unauthenticated' });
        }
    }, [query.dataUpdatedAt, query.isSuccess, query.isError, query.isFetching]);

    return query;
};
