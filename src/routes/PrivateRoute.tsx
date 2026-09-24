import {useAuthStore} from "../stores/authStore.tsx";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>;
    }

    return <Outlet/>;

};

export default PrivateRoute;