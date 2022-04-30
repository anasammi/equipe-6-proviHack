import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AwardPage from "../Pages/LastPage/AwardPage";
import LocationPage from "../Pages/LocationPage/LocationPage";
import Shop from "../Pages/Shop/Shop";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<LocationPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/award" element={<AwardPage />} />

            </Routes>
        </BrowserRouter>
    )
};

export default Router;