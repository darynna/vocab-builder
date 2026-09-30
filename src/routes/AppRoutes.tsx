import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "../pages/LoginPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";
import DictionaryPage from "../pages/DictionaryPage.tsx";
import RecommendPage from "../pages/RecommendPage.tsx";
import TrainingPage from "../pages/TrainingPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import PublicRoute from "./PublicRoute.tsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route element={<PublicRoute/>}>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                    </Route>
                    <Route element={<PrivateRoute/>}>
                        <Route path="/" element={<Navigate to="/dictionary" replace />}/>
                        <Route path="/dictionary" element={<DictionaryPage/>}/>
                        <Route path="/recommend" element={<RecommendPage/>}/>
                        <Route path="/training" element={<TrainingPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;