import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.tsx";

const MainLayout = () => {
    return (
        <main className="min-h-screen px-4 py-4 md:px-8 md:py-5">
            <div className="mx-auto w-full max-w-[1240px]">
                <Header/>
                <Outlet/>
            </div>
        </main>
    );
};

export default MainLayout;