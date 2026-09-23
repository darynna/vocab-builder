import {useAuthStore} from "../../stores/authStore.tsx";

type UserBarProps = {
    userImage: string;
    nameClassName?: string;
}

const UserBar = ({userImage, nameClassName}: UserBarProps ) => {
    const userName = useAuthStore((state) => state.user?.name);
    const firstName = userName?.split(" ")[0];
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
                <p className={`text-base md:text-xl ${nameClassName}`}>{firstName}</p>
                <img src={userImage} alt="user" className='w-9 md:w-12'/>
            </div>
        </div>
    );
};

export default UserBar;