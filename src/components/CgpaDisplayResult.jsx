import { AppContext } from "../storage/AppStorage";
import style from "./CgpaDisplayResult.module.css";

import React, { useContext } from "react";

function CgpaDisplayResult() {
  const { cgpaGrade, cgpaPercentage, cgpa } = useContext(AppContext);

  return (
    <div className={style.cgpa_result_container}>
      <div className={style.cgpa_result}>
        <div className={style.result_box}>
          <p>
            <strong>GPA</strong>
          </p>
          <p className={style.cgpa}>
            <strong>
              {!isNaN(cgpa) ? `${cgpaGrade} ${cgpa.toFixed(2)}` : "0"}
            </strong>
          </p>
        </div>
        <div className={style.result_box}>
          <p>Percentage</p>
          <p className={style.cgpa_percentage}>{cgpaPercentage || 0}</p>
        </div>
      </div>
    </div>
  );
}

export default CgpaDisplayResult;
