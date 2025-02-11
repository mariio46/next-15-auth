'use client';

import { SWRConfig } from 'swr';

const SwrConfigProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <SWRConfig
            value={{
                shouldRetryOnError: true,
                revalidateOnFocus: false,
                errorRetryInterval: 5000,
                refreshInterval: 600000, // 600,000 milliseconds = 10 minutes
                onErrorRetry: (error, key, config, revalidate, revalidateOpts) => {
                    if (error.response?.status === 401) return;

                    if (error.response?.status === 503) return;

                    if (revalidateOpts.retryCount >= 5) return;

                    setTimeout(() => revalidate({ retryCount: revalidateOpts.retryCount }), 5000);
                },
                onError: () => {
                    console.log('error from provider');
                },
            }}>
            {children}
        </SWRConfig>
    );
};

export { SwrConfigProvider };
