import React, { useContext } from "react";
import style from "./ResultPage.module.css";
import Button from "./Button";
import ResultDisplay from "./ResultDisplay";
import ResultInputField from "./ResultInputField";
import CgpaResultPage from "./CgpaResultPage";
import { AppContext } from "../storage/AppStorage";

function ResultPage() {
  const { reducerData, handleClickFromHome, isclicked } =
    useContext(AppContext);
  const courseArr = reducerData[0].subjects;
  const creditArr = reducerData[0].credit;

  function handleClickHome() {
    handleClickFromHome(false);
  }

  return (
    <div className={style.main_inner_result_page}>
      {isclicked ? (
        <CgpaResultPage />
      ) : (
        <div>
          <ResultDisplay />
          {courseArr.map((course) => {
            return (
              <ResultInputField
                key={course}
                courseName={course}
                credit={creditArr[course]}
              />
            );
          })}
          <Button
            handleClickHome={handleClickHome}
            type="button"
            text="Calculate All Year CGPA"
            m="8px 0 0 0"
          />
        </div>
      )}
    </div>
  );
}

export default ResultPage;
