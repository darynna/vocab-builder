import RegisterForm from "../components/Auth/RegisterForm.tsx";
import {NavLink} from "react-router-dom";

const RegisterPage = () => {
    return (
        <div
            className='flex flex-col min-h-[calc(100vh-100px)] justify-center items-center xl:grid xl:grid-cols-2 xl:gap-20'>
            {/* Mobile illustration */}
            <img src="/images/illustration.png" alt="Two students studying" className="w-[247px] md:hidden"/>
            <div
                className="flex flex-1 flex-col justify-center -mx-4 -mb-4 w-[calc(100%+2rem)] md:flex-0 md:mx-0
                            md:mb-0 md:w-auto md:max-w-[628px] bg-green-accent/10 rounded-t-4xl md:rounded-4xl">
                <div className='px-4 py-8 md:py-12 md:px-16'>
                    <h1 className="text-3xl md:text-4xl mb-4 font-semibold">Register</h1>
                    <p className="text-gray-600 mb-4 md:text-xl">To start using our services, please fill out the
                        registration form
                        below. All fields are mandatory:</p>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <RegisterForm/>
                        <NavLink to="/login" className="text-base opacity-50 underline">Login</NavLink>
                    </div>
                </div>
            </div>
            {/* Desktop illustration + text */}
            <div className="flex flex-col items-center">
                <img
                    src="/images/illustration.png"
                    alt="Two students studying"
                    className="w-[498px] hidden xl:block"
                />

                <div className="hidden md:flex md:items-center md:gap-2 md:mt-24 xl:mt-0 text-base">
                    <span>Word</span>
                    <span>·</span>
                    <span>Translation</span>
                    <span>·</span>
                    <span>Grammar</span>
                    <span>·</span>
                    <span>Progress</span>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;