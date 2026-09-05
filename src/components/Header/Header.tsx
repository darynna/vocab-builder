import {Link} from "react-router-dom";
import UserBar from "./UserBar.tsx";
import {useEffect, useState} from "react";
import NavigationLinks from "./NavigationLinks.tsx";
import useMediaQuery from "../../hooks/useMediaQuery.ts";
import MobileMenu from "./MobileMenu.tsx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Temporary placeholder until real authentication is implemented
    const isSignedIn = true;

    const isDesktop = useMediaQuery("(min-width: 1024px)");
    useEffect(() => {
        if (isDesktop) {
            setIsMenuOpen(false);
        }
    }, [isDesktop]);

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    if (!isSignedIn) {
        return (
            <header>
                <Link to="/">
                    <img
                        className="h-9 md:h-10"
                        src="/icons/logos/logo.svg"
                        alt="VocabBuilder"
                    />
                </Link>
            </header>
        );
    }

    return (
        <>
            <header>
                <nav className="flex justify-between items-center">
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
                            <button type='button' className="flex items-center gap-2 text-base">Log out <img
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
                <MobileMenu closeMenu={closeMenu}/>
            )}
        </>
    )
}

export default Header;