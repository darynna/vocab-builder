import {Link} from "react-router-dom";
import UserBar from "./UserBar.tsx";
import {useEffect, useState} from "react";
import NavigationLinks from "./NavigationLinks.tsx";
import useMediaQuery from "../hooks/useMediaQuery.ts";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isDesktop = useMediaQuery("(min-width: 1024px)");
    useEffect(() => {
        if (isDesktop) {
            setIsMenuOpen(false);
        }
    }, [isDesktop]);

    const closeMenu = () => {
        setIsMenuOpen(false);
    }
    return (
        <>
            <header>
                <nav className="flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <img className="h-9 md:h-10" src="/icons/logos/logo.svg" alt='logo'/>
                        </Link>
                    </div>
                    {/* Desktop navigation */}
                    <div className="hidden lg:block">
                        <NavigationLinks/>
                    </div>
                    <div>
                        {/* Desktop user */}
                        <div className='hidden lg:flex items-center gap-4 text-base'>
                            <UserBar userImage={"/icons/user-green.png"}/>
                            <button type='button' className="flex items-center gap-2 text-base">Log out <img
                                src="/icons/arrow-right.png" alt="logout"/>
                            </button>
                        </div>

                        {/* Mobile / tablet burger */}
                        <div className='lg:hidden'>
                            <button aria-label="Open menu" onClick={() => setIsMenuOpen(true)}>
                                <img src="/icons/burger-menu.png" alt="menu"/>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile / tablet menu */}
            {isMenuOpen && (
                <div
                    className='fixed top-0 right-0 h-dvh z-50 w-[185px] md:w-[300px] flex flex-col justify-between items-start bg-green-background'>
                    <div className='flex items-center justify-between w-full p-4 md:px-8 md:py-5'>
                        <UserBar userImage={"/icons/user-white.png"} nameClassName="text-white"/>
                        <button type='button' onClick={closeMenu} className='w-8 md:w-10' aria-label="Close menu">
                            <img src='./icons/close.png' alt='close'/>
                        </button>
                    </div>
                    <div className='flex flex-col gap-7 p-4 md:px-8'>
                        <NavigationLinks onNavigate={closeMenu} mobile/>
                        <button type='button' className="flex items-center gap-2 text-sm text-white">Log out <img
                            src="/icons/arrow-right-white.png" alt="logout"/>
                        </button>
                    </div>
                    <div className="w-full flex justify-center overflow-hidden">
                        <img
                            src="/images/illustration.png"
                            alt="Illustration"
                            className="w-[364px] md:w-[498px] max-w-none shrink-0"
                        />
                    </div>
                </div>

            )}
        </>
    )
}

export default Header;