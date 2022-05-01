import { useState } from "react";
import { SplashPage } from "./SplashPage";
import HomePage from "../HomePage/HomePage";

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
        <HomePage/>
      )}
    </>
  );
}