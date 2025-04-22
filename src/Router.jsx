import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./pages/HomePage";
import ScrollPage from "./pages/ScrollPage";

const Router = () => {

    return (
        <BrowserRouter>  
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/scroll" element={<ScrollPage />} />
            </Routes>
        </BrowserRouter>  
    )
};

export default Router;