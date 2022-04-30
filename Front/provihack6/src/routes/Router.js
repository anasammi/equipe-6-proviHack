import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PinkAwardPage from "../Pages/AwardPages/PinkAwardPage";
import RedAwardPage from "../Pages/AwardPages/RedAwardPage";
import LocationPage from "../Pages/LocationPage/LocationPage";
import Shop from "../Pages/Shop/Shop";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<LocationPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/award" element={<PinkAwardPage />} />
                
            </Routes>
        </BrowserRouter>
    )
};

export default Router;