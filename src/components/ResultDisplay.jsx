import { AppContext } from "../storage/AppStorage";
import style from "./ResultDisplay.module.css";

import React, { useContext } from "react";

function ResultDisplay() {
  const { reducerData, gpa, percentage, grade } = useContext(AppContext);
  const credits = Object.values(reducerData[0].credit);
  const totalCredit = credits.reduce((accumulator, current) => {
    return parseFloat(accumulator) + parseFloat(current);
  });

  return (
    <div className={style.result_container}>
      <p className={style.year}>First Year</p>
      <div className={style.result}>
        <div className={style.result_box}>
          <p>Total Credit</p>
          <p className={style.total_credit}>{totalCredit}</p>
        </div>
        <div className={style.result_box}>
          <p>
            <strong>GPA</strong>
          </p>
          <p className={style.gpa}>
            {isNaN(gpa) ? "0" : `${grade} ${gpa.toFixed(2)}`}
          </p>
        </div>
        <div className={style.result_box}>
          <p>Percentage</p>
          <p className={style.percentage}>{!percentage ? "0" : percentage}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultDisplay;
