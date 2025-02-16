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
    setAuth: (auth: AuthUserState) => void;
};

type UseAuthUserStore = AuthUserState & AuthUserAction;

const authUserStore = create<UseAuthUserStore>()((set) => ({
    user: undefined,
    status: 'pending',

    setAuth: (auth) => set(() => auth),
}));

export const useAuthUserStore = <T>(selector: (state: UseAuthUserStore) => T): T => {
    return authUserStore(useShallow(selector));
};
