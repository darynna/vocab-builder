import {useEffect, useState} from "react";
import AppRoutes from "./routes/AppRoutes.tsx";
import {requestCurrentUser} from "./services/authService.tsx";
import {useAuthStore} from "./stores/authStore.tsx";
import Loader from "./components/Loader.tsx";

function App() {
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const setAuth = useAuthStore((state) => state.setAuth);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    const checkAuth = async () => {
      const token = useAuthStore.getState().token;

      if(!token){
        setIsAuthLoading(false);
        return;
      }

      try {
        const user = await requestCurrentUser();
        setAuth(user);
      }catch{
        logout();
      }finally {
        setIsAuthLoading(false);
      }
    }
    checkAuth();
  }, [setAuth, logout]);

  if (isAuthLoading) {
    return (
        <Loader/>
    );
  }

  return (
 <AppRoutes/>
  )
}

export default App
