import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/Header/Header.tsx";

const MainLayout = () => {

    const location = useLocation();

    const isAuthPage =
        location.pathname === "/login" ||
        location.pathname === "/register";

    return (
        <div className={isAuthPage ? "min-h-screen bg-white" : "min-h-screen bg-grey-background"}>
        <Header/>
        <main className="w-full max-w-[1304px] mx-auto px-4 py-4 md:px-8 md:py-5 ">
                <Outlet/>
        </main>
        </div>
    );
};

export default MainLayout;