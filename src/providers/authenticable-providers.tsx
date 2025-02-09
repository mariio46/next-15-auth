'use client';

import * as React from 'react';

type AuthenticableContextType = {
    isLoggedIn: boolean;
    token?: string;
};

const AuthenticableContext = React.createContext<AuthenticableContextType | undefined>(undefined);

const useAuthencticable = () => {
    const context = React.useContext(AuthenticableContext);

    if (context === undefined) {
        throw new Error('useAuthencticable must be used within a AuthenticableProvider!');
    }

    return context;
};

interface AuthenticableProviderProps extends AuthenticableContextType {
    children: React.ReactNode;
}

const AuthenticableProvider = ({ children, isLoggedIn, token }: AuthenticableProviderProps) => {
    return <AuthenticableContext.Provider value={{ isLoggedIn, token }}>{children}</AuthenticableContext.Provider>;
};

export { AuthenticableProvider, useAuthencticable };
