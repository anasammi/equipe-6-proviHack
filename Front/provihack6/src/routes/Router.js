import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PinkAwardPage from "../Pages/AwardPages/PinkAwardPage";
import LocationPage from "../Pages/LocationPage/LocationPage";
import Shop from "../Pages/Shop/Shop";
import { InitialPage } from "../Pages/SplashPage/InitialPage";
import RedAwardPage from "../Pages/AwardPages/RedAwardPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUp from "../Pages/SignupPage/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/map" element={<LocationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/award" element={<PinkAwardPage />} />
        <Route path="/noaward" element={<RedAwardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
