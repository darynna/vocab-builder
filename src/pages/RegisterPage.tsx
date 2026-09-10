import RegisterForm from "../components/Auth/RegisterForm.tsx";
import {NavLink} from "react-router-dom";

const RegisterPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen mx-auto'>
            <img src="/images/illustration.png" alt="kids" className="w-[247px] md:hidden"/>
            <div className="flex flex-1 md:flex-0 flex-col justify-center -m-4 max-w-[628px] bg-green-accent/10 rounded-t-4xl md:rounded-4xl">
                <div className='px-4 py-8 md:py-12 md:px-16'>
                    <h1 className="text-3xl md:text-4xl mb-4 font-semibold">Register</h1>
                    <p className="text-gray-600 mb-4 md:text-xl">To start using our services, please fill out the registration form
                        below. All fields are mandatory:</p>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <RegisterForm/>
                        <NavLink to="/login" className="text-base opacity-50 underline">Login</NavLink>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex items-center md:mt-[98px] gap-2 text-base">
                <span>Word</span>
                <span>·</span>
                <span>Translation</span>
                <span>·</span>
                <span>Grammar</span>
                <span>·</span>
                <span>Progress</span>
            </div>
        </div>
    );
};

export default RegisterPage;