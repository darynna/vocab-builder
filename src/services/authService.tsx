import axios from 'axios';
import type {AuthResponse, RegisterData, SignInData} from "../types/auth.tsx";
import {useAuthStore} from "../stores/authStore.tsx";

export const authService = axios.create({
    baseURL: "https://vocab-builder-backend.p.goit.global/api",
})

authService.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const requestRegister = async (formData: RegisterData): Promise<AuthResponse> => {
    const {data} = await authService.post("users/signup", formData);
    return data;
}

export const requestLogin = async (formData: SignInData) : Promise<AuthResponse> => {
    const {data} = await authService.post("users/signin", formData);
    return data;
}

export const requestLogout = async () : Promise<void> => {
    await authService.post("users/signout");
}

export const requestCurrentUser = async (): Promise<AuthResponse> => {
    const {data} = await authService.get("users/current");
    return data;
};