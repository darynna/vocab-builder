import UserBar from "./UserBar.tsx";
import NavigationLinks from "./NavigationLinks.tsx";

type MobileMenuProps = {
    closeMenu: () => void;
}

const MobileMenu = ({closeMenu} : MobileMenuProps) => {
  return (
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
  );
};

export default MobileMenu;