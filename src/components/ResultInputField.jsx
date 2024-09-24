import React, { useContext } from "react";
import style from "./ResultInputField.module.css";
import { AppContext } from "../storage/AppStorage";

function ResultInputField({ courseName, credit }) {
  const { handleResultSubmit } = useContext(AppContext);

  function handleFormInput(event) {
    const subjectGrade = event.target.value; // => A 3.75
    const subjectGpaNum = parseFloat(subjectGrade.split(" ").pop()); // => 3.75

    let sgpa = subjectGpaNum * parseFloat(credit);

    const sgpaObj = { [`${courseName}`]: sgpa };
    const creditObj = { [`${courseName}`]: credit };

    handleResultSubmit(sgpaObj, creditObj);
  }
  return (
    <form onChange={handleFormInput} className={style.result_page_form}>
      <div className={style.result_page_form_inner}>
        <p className={style.subject_name}>{courseName}</p>
        <div className={style.result_input_container}>
          <div className={style.result_form_field}>
            <span className={style.result_credit_label}>Credit:</span>
            <span className={style.result_credit}>{credit}</span>
          </div>
          <div className={style.result_form_field}>
            <span className={style.result_grade_label}>Grade:</span>
            <select defaultValue="Select" className={style.result_grade_select}>
              <option disabled>Select</option>
              <option
                value="A+ 4.00"
                data-course-name="English Reading Skills"
                data-year="First Year"
                data-subject="English"
                data-credit="4"
              >
                A+ 4.00
              </option>
              <option
                value="A 3.75"
                data-course-name="English Reading Skills"
                data-year="First Year"
                data-subject="English"
                data-credit="4"
              >
                A 3.75
              </option>
              <option
                value="A- 3.50"
                data-course-name="English Reading Skills"
                data-year="First Year"
                data-subject="English"
                data-credit="4"
              >
                A- 3.50
              </option>
              <option
                value="B+ 3.25"
                data-course-name="English Reading Skills"
                data-year="First Year"
                data-subject="English"
                data-credit="4"
              >
                B+ 3.25
              </option>
              <option
                value="B 3.00"
                data-course-name="English Reading Skills"
                data-year="First Year"
                data-subject="English"
                data-credit="4"
              >
                B 3.00
              </option>
              <option
                value="B- 2.75"
                data-course-name="English Reading Skills"
                data-year="First Year"
                data-subject="English"
                data-credit="4"
              >
                B- 2.75
              </option>
              <option
                value="C+ 2.50"
                data-course-name="English Reading Skills"
                data-year="First Year"
                data-subject="English"
                data-credit="4"
              >
                C+ 2.50
              </option>
              <option
                value="C 2.25"
                data-course-name="English Reading Skills"
                data-year="First Year"
                data-subject="English"
                data-credit="4"
              >
                C 2.25
              </option>
              <option
                value="D 2.00"
                data-course-name="English Reading Skills"
                data-year="First Year"
                data-subject="English"
                data-credit="4"
              >
                D 2.00
              </option>
              <option
                value="F 0.00"
                data-course-name="English Reading Skills"
                data-year="First Year"
                data-subject="English"
                data-credit="4"
              >
                F 0.00
              </option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ResultInputField;
