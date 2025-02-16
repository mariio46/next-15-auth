'use client';

import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

import type { AuthUser } from '@/types/api/auth';

type PendingUser = {
    user: undefined;
    status: 'pending';
};

type AuthenticatedUser = {
    user: AuthUser;
    status: 'authenticated';
};

type UnauthenticatedUser = {
    user: undefined;
    status: 'unauthenticated';
};

type AuthUserState = PendingUser | AuthenticatedUser | UnauthenticatedUser;

type AuthUserAction = {
    setUser: (user: AuthUser) => void;

    clearAuth: () => void;
    setUnauth: () => void;
    setAuth: (user: AuthUser) => void;
};

type UseAuthUserStore = AuthUserState & AuthUserAction;

const authUserStore = create<UseAuthUserStore>()((set) => ({
    user: undefined,
    status: 'pending',

    setUser: (user) => set({ user }),

    clearAuth: () => set({ user: undefined, status: 'unauthenticated' }),
    setUnauth: () => set({ user: undefined, status: 'unauthenticated' }),
    setAuth: (user) => set({ status: 'authenticated', user }),
}));

export const useAuthUserStore = () => {
    return authUserStore(useShallow((state) => state));
};
