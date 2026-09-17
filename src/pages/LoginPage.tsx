import LoginForm from "../components/Auth/LoginForm.tsx";
import {NavLink} from "react-router-dom";
import AuthIllustration from "../components/Auth/AuthIllustration.tsx";

const LoginPage = () => {
    return (
        <div
            className='flex flex-col min-h-[calc(100vh-100px)] justify-center items-center xl:grid xl:grid-cols-2 xl:gap-20'>
            {/* Mobile illustration */}
            <img src="/images/illustration.png" alt="Two students studying" className="w-[247px] md:hidden"/>
            <div
                className="flex flex-1 flex-col justify-center -mx-4 -mb-4 w-[calc(100%+2rem)] md:flex-0 md:mx-0
                            md:mb-0 md:w-auto md:max-w-[628px] bg-green-accent/10 rounded-t-4xl md:rounded-4xl">
                <div className='px-4 py-8 md:py-12 md:px-16'>
                    <h1 className="text-3xl md:text-4xl mb-4 font-semibold">Login</h1>
                    <p className="text-gray-600 mb-4 md:text-xl">Please enter your login details to continue using our
                        service:</p>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <LoginForm/>
                        <NavLink to="/register" className="text-base opacity-50 underline">Don't have an account?
                            Register</NavLink>
                    </div>
                </div>
            </div>
            {/* Desktop illustration + text */}
            <AuthIllustration/>git add src/components/Auth/AuthIllustration.tsx src/pages/LoginPage.tsx src/pages/RegisterPage.tsx
        </div>
    );
};

export default LoginPage;