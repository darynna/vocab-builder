import {useForm} from "react-hook-form"
import type {SubmitHandler} from "react-hook-form";
import {requestLogin} from "../../services/authService.tsx";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

type Inputs = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsLoading(true);
        try {
            await requestLogin(data);
            navigate("/");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const responseData = error.response?.data;

                const message = Array.isArray(responseData)
                    ? responseData[0]?.message
                    : responseData?.message;

                setError("root.serverError", {
                    message: message || "Something went wrong. Please try again.",
                });
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3.5 w-full'>
            <label>
                <input {...register("email", {required: "Email is required"})} type='email' placeholder="Email"
                       className='block w-full p-4 text-base border border-black/10 rounded-xl'/>
                {errors.email && (
                    <span className='text-xs text-red-900'>{errors.email.message}</span>
                )}
            </label>
            <label>
                <input {...register("password", {required: "Password is required"})} type='password' placeholder="Password"
                       className='block w-full p-4 text-base border border-black/10 rounded-xl'/>
                {errors.password && (
                    <span className='text-xs text-red-900'>{errors.password.message}</span>
                )}
            </label>
            {errors.root?.serverError && (
                <span className="text-xs text-red-900">
                    {errors.root.serverError.message}
                </span>
            )}



            <button type="submit" disabled={isLoading}
                    className='mt-4 bg-green-accent text-white p-4 rounded-4xl md:text-lg
                    disabled:opacity-50 disabled:cursor-not-allowed'>
                {isLoading ? "Logging in..." : "Login"}</button>
        </form>
    )
};

export default LoginForm;