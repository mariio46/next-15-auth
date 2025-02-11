import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { axiosClient } from './axios';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const fetcher = (url: string) => axiosClient.get(url).then((res) => res.data);
