import React, { useContext } from "react";
import style from "./Main.module.css";
import HomePage from "./HomePage";
import { AppContext } from "../storage/AppStorage";
import ResultPage from "./ResultPage";
import CgpaResultPage from "./CgpaResultPage";

function Main() {
  const { reducerData, isclicked } = useContext(AppContext);

  return (
    <main className="container">
      {/* {reducerData.length === 0 ? <HomePage /> : <ResultPage />} */}
      {/* {isclicked ? <CgpaResultPage /> : <HomePage />} */}
      {reducerData.length === 0 ? (
        isclicked ? (
          <CgpaResultPage />
        ) : (
          <HomePage />
        )
      ) : (
        <ResultPage />
      )}
    </main>
  );
}

export default Main;
