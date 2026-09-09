import {useForm} from "react-hook-form"
import type {SubmitHandler} from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    password: string;
};

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3.5 w-full'>
            <label><input {...register("name", {required: "Name is required"})} type='text' placeholder="Name"
                          className='block w-full p-4 text-base border-2 border-grey-background rounded-xl'/>
                {errors.name && (
                    <span className='text-xs text-red-900'>{errors.name.message}</span>
                )}</label>
            <label>
                <input {...register("email", {required: "Email is required"})} type='email' placeholder="Email"
                       className='block w-full p-4 text-base border-2 border-grey-background rounded-xl'/>
                {errors.email && (
                    <span className='text-xs text-red-900'>{errors.email.message}</span>
                )}
            </label>
            <label>
                <input {...register("password", {required: "Password is required"})} type='password' placeholder="Password"
                       className='block w-full p-4 text-base border-2 border-grey-background rounded-xl'/>
                {errors.password && (
                    <span className='text-xs text-red-900'>{errors.password.message}</span>
                )}
            </label>


            <button type="submit" className='bg-green-accent text-white p-4 rounded-4xl'>Register</button>
        </form>
    )
};

export default RegisterForm;