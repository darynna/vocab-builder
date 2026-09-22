export type RegisterData = {
    name: string;
    email: string;
    password: string;
}

export type SignInData = {
    email: string;
    password: string;
}

export type AuthResponse = {
    name: string;
    email: string;
    token: string;
};