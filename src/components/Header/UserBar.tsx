type UserBarProps = {
    userImage: string;
    nameClassName?: string;
}

const UserBar = ({userImage, nameClassName}: UserBarProps ) => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
                <p className={`text-base md:text-xl ${nameClassName}`}>User</p>
                <img src={userImage} alt="user" className='w-9 md:w-12'/>
            </div>
        </div>
    );
};

export default UserBar;