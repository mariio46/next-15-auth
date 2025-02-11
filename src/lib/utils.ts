import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { axiosClient } from './axios';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const fetcher = (url: string) => axiosClient.get(url).then((res) => res.data);

export function getCurrentHostname() {
    const hostname = process.env.NEXT_PUBLIC_BASE_APP_URL;

    if (hostname.startsWith('https')) {
        return hostname.split('//').pop()?.split('.').shift();
    }

    return hostname.split('//').pop()?.split(':').shift();
}
