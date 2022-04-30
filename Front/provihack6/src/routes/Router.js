import { Routes, Route, BrowserRouter } from "react-router-dom";
import LocationPage from "../Pages/LocationPage/LocationPage";
import AwardPage from "../Pages/LastPage/AwardPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LocationPage />} />
        <Route exact path="/successPage" element={<AwardPage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
