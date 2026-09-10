import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";
import DictionaryPage from "../pages/DictionaryPage.tsx";
import RecommendPage from "../pages/RecommendPage.tsx";
import TrainingPage from "../pages/TrainingPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/dictionary" element={<DictionaryPage/>}/>
                    <Route path="/recommend" element={<RecommendPage/>}/>
                    <Route path="/training" element={<TrainingPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;