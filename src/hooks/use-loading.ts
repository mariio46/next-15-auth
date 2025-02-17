import * as React from 'react';

export const useLoading = (initialValue: boolean = false) => {
    const [loading, setLoading] = React.useState<boolean>(initialValue);

    const startLoading = () => setLoading(() => true);

    const stopLoading = () => setLoading(() => false);

    return { loading, setLoading, startLoading, stopLoading };
};
