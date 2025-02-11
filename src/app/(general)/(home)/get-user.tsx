'use client';

import * as React from 'react';

import { getCookie } from 'cookies-next/client';
import useSWR from 'swr';

import { fetcher } from '@/lib/utils';

const GetUser = () => {
    React.useEffect(() => {
        getCookie('isLoggedIn');
    }, []);

    const condition = !!Number(getCookie('isLoggedIn') ?? 0);
    const { data, isLoading, isValidating } = useSWR(condition ? '/api/auth-user' : null, fetcher);

    console.log(data, isLoading, isValidating);

    return <React.Fragment />;
};

export { GetUser };
