import {Link} from "react-router-dom";
import UserBar from "./UserBar.tsx";
import {useEffect, useState} from "react";
import NavigationLinks from "./NavigationLinks.tsx";
import useMediaQuery from "../../hooks/useMediaQuery.ts";
import MobileMenu from "./MobileMenu.tsx";
import {useAuthStore} from "../../stores/authStore.tsx";
import {requestLogout} from "../../services/authService.tsx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const logout = useAuthStore((state) => state.logout);

    useEffect(() => {
        if (isDesktop) {
            setIsMenuOpen(false);
        }
    }, [isDesktop]);

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const handleLogout = async () => {
        try {
            await requestLogout();
        } catch (error) {

        }finally {
            logout();
        }
    }

    if (!isAuthenticated) {
        return (
            <header className="px-4 py-4 md:px-8 md:py-5">
                <nav className='mx-auto w-full max-w-[1240px]'>
                    <Link to="/">
                        <img
                          className="h-9 md:h-10"
                          src="/icons/logos/logo.svg"
                          alt="VocabBuilder"
                       />
                     </Link>
                </nav>
            </header>
        );
    }

    return (
        <>
            <header className="px-4 py-4 md:px-8 md:py-5 bg-white">
                <nav className="mx-auto flex w-full max-w-[1240px] items-center justify-between">
                    <Link to="/">
                        <img className="h-9 md:h-10" src="/icons/logos/logo.svg" alt='logo'/>
                    </Link>
                    {/* Desktop navigation */}
                    <div className="hidden lg:block">
                        <NavigationLinks/>
                    </div>
                    <div>
                        {/* Desktop user */}
                        <div className='hidden lg:flex items-center gap-4 text-base'>
                            <UserBar userImage={"/icons/user-green.png"} nameClassName={"text-black"}/>
                            <button onClick={handleLogout} type='button' className="flex items-center gap-2 text-base">Log out <img
                                src="/icons/arrow-right.png" alt="logout"/>
                            </button>
                        </div>

                        {/* Mobile / tablet burger */}
                        <div className='lg:hidden'>
                            <button type='button' aria-label="Open menu" aria-expanded={isMenuOpen}
                                    onClick={() => setIsMenuOpen(true)}>
                                <img src="/icons/burger-menu.png" alt="menu"/>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile / tablet menu */}
            {isMenuOpen && (
                <MobileMenu closeMenu={closeMenu} handleLogOut={handleLogout}/>
            )}
        </>
    )
}

export default Header;