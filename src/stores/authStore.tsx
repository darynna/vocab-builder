import { create } from "zustand";
import {persist} from "zustand/middleware";
import type { AuthResponse } from "../types/auth.tsx";

type AuthState = {
    user: AuthResponse | null;
    token: string | null;
    isAuthenticated: boolean;
    setAuth: (data: AuthResponse) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            isAuthenticated: false,

            setAuth: (data) =>
                set({
                    user: data,
                    token: data.token,
                    isAuthenticated: true,
                }),

            logout: () =>
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false,
                }),
        }),
        {
            name: "auth-storage",
        }
    )
);