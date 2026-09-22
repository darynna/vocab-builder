import axios from 'axios';
import type {AuthResponse, RegisterData, SignInData} from "../types/auth.ts";

export const authService = axios.create({
    baseURL: "https://vocab-builder-backend.p.goit.global/api",
})

export const setToken = (token: any)  : void => {
    authService.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async (formData: RegisterData): Promise<AuthResponse> => {
    const {data} = await authService.post("users/signup", formData);
    setToken(data.token);
    return data;
}

export const requestLogin = async (formData: SignInData) : Promise<AuthResponse> => {
    const {data} = await authService.post("users/signin", formData);
    setToken(data.token);
    return data;
}