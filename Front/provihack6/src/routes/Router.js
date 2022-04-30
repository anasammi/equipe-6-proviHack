import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AwardPage from "../Pages/LastPage/AwardPage";
import LocationPage from "../Pages/LocationPage/LocationPage";
import Shop from "../Pages/Shop/Shop";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<LocationPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/award" element={<AwardPage />} />

            </Routes>
        </BrowserRouter>
    )
};

export default Router;