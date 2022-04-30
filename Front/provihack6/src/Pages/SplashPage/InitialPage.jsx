import { useState } from "react";
import { SplashPage } from "./SplashPage";
import LocationPage from "../LocationPage/LocationPage";

export const InitialPage = () => {
    const [splashScreentime, setSplashScreentime] = useState(true);

    setTimeout(() => {
        setSplashScreentime(false);
      }, 4000);

  return (
    <>
      {splashScreentime ? (
        <SplashPage />
      ) : (
        <LocationPage/>
      )}
    </>
  );
}