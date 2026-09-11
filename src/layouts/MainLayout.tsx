import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.tsx";

const MainLayout = () => {
    return (
        <>
        <Header/>
        <main className="w-full max-w-[1240px] mx-auto px-4 py-4 md:px-8 md:py-5">
                <Outlet/>
        </main>
        </>
    );
};

export default MainLayout;