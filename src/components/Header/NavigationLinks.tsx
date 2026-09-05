import {NavLink} from "react-router-dom";

const navItems = [
    {label: "Dictionary", to: "/dictionary"},
    {label: "Recommend", to: "/recommend"},
    {label: "Training", to: "/training"},
];

type NavigationLinksProps = {
    mobile?: boolean;
    onNavigate?: () => void;
}

const NavigationLinks = ({mobile, onNavigate}: NavigationLinksProps) => {
    return (
        <div
            className={mobile ? "flex flex-col gap-7" : "flex gap-12 justify-center items-center"}>
            {navItems.map(({label, to}) => (
                <NavLink key={to} to={to} onClick={onNavigate} className={({isActive}) => {
                    if (mobile) {
                        return isActive
                            ? "text-sm px-4 py-2 rounded-xl bg-white text-black"
                            : "text-sm text-white";
                    }

                    return isActive
                        ? "text-sm px-4 py-2 rounded-xl bg-green-accent text-white"
                        : "text-sm px-4 py-2 text-black";
                }}>{label}</NavLink>
            ))}
        </div>
    );
};

export default NavigationLinks;