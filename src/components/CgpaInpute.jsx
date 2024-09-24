import { AppContext } from "../storage/AppStorage";
import style from "./CgpaInpute.module.css";
import React, { useContext } from "react";

function CgpaInpute() {
  const { handleCgpaInput } = useContext(AppContext);
  function handleFormInput(event) {
    const year = event.target.dataset.year;
    const gpaNum = parseFloat(event.target.value.split(" ").pop());
    const cgpaDataObj = {
      [`${year}`]: gpaNum,
    };
    handleCgpaInput(cgpaDataObj);
  }
  return (
    <form onChange={handleFormInput} className={style.result_page_form_cgpa}>
      <div className={style.cgpa_result_page_form_inner}>
        <p className={style.cgpa_year}>First Year</p>

        <select
          className={style.cgpa_select}
          defaultValue="Select Your Grade"
          data-year="First Year"
        >
          <option disabled>Select Your Grade</option>
          <option value="A+ 4.00" data-year="First Year">
            A+ 4.00
          </option>
          <option value="A 3.75" data-year="First Year">
            A 3.75
          </option>
          <option value="A- 3.50" data-year="First Year">
            A- 3.50
          </option>
          <option value="B+ 3.25" data-year="First Year">
            B+ 3.25
          </option>
          <option value="B 3.00" data-year="First Year">
            B 3.00
          </option>
          <option value="B- 2.75" data-year="First Year">
            B- 2.75
          </option>
          <option value="C+ 2.50" data-year="First Year">
            C+ 2.50
          </option>
          <option value="C 2.25" data-year="First Year">
            C 2.25
          </option>
          <option value="D 2.00" data-year="First Year">
            D 2.00
          </option>
          <option value="F 0.00" data-year="First Year">
            F 0.00
          </option>
        </select>
      </div>
      <div className={style.cgpa_result_page_form_inner}>
        <p className={style.cgpa_year}>Second Year</p>

        <select
          className={style.cgpa_select}
          defaultValue="Select Your Grade"
          data-year="Second Year"
        >
          <option disabled>Select Your Grade</option>
          <option value="A+ 4.00" data-year="First Year">
            A+ 4.00
          </option>
          <option value="A 3.75" data-year="First Year">
            A 3.75
          </option>
          <option value="A- 3.50" data-year="First Year">
            A- 3.50
          </option>
          <option value="B+ 3.25" data-year="First Year">
            B+ 3.25
          </option>
          <option value="B 3.00" data-year="First Year">
            B 3.00
          </option>
          <option value="B- 2.75" data-year="First Year">
            B- 2.75
          </option>
          <option value="C+ 2.50" data-year="First Year">
            C+ 2.50
          </option>
          <option value="C 2.25" data-year="First Year">
            C 2.25
          </option>
          <option value="D 2.00" data-year="First Year">
            D 2.00
          </option>
          <option value="F 0.00" data-year="First Year">
            F 0.00
          </option>
        </select>
      </div>
      <div className={style.cgpa_result_page_form_inner}>
        <p className={style.cgpa_year}>Third Year</p>

        <select
          className={style.cgpa_select}
          defaultValue="Select Your Grade"
          data-year="Third Year"
        >
          <option disabled>Select Your Grade</option>
          <option value="A+ 4.00" data-year="First Year">
            A+ 4.00
          </option>
          <option value="A 3.75" data-year="First Year">
            A 3.75
          </option>
          <option value="A- 3.50" data-year="First Year">
            A- 3.50
          </option>
          <option value="B+ 3.25" data-year="First Year">
            B+ 3.25
          </option>
          <option value="B 3.00" data-year="First Year">
            B 3.00
          </option>
          <option value="B- 2.75" data-year="First Year">
            B- 2.75
          </option>
          <option value="C+ 2.50" data-year="First Year">
            C+ 2.50
          </option>
          <option value="C 2.25" data-year="First Year">
            C 2.25
          </option>
          <option value="D 2.00" data-year="First Year">
            D 2.00
          </option>
          <option value="F 0.00" data-year="First Year">
            F 0.00
          </option>
        </select>
      </div>
      <div className={style.cgpa_result_page_form_inner}>
        <p className={style.cgpa_year}>Fourth Year</p>

        <select
          className={style.cgpa_select}
          defaultValue="Select Your Grade"
          data-year="Fourth Year"
        >
          <option disabled>Select Your Grade</option>
          <option value="A+ 4.00" data-year="First Year">
            A+ 4.00
          </option>
          <option value="A 3.75" data-year="First Year">
            A 3.75
          </option>
          <option value="A- 3.50" data-year="First Year">
            A- 3.50
          </option>
          <option value="B+ 3.25" data-year="First Year">
            B+ 3.25
          </option>
          <option value="B 3.00" data-year="First Year">
            B 3.00
          </option>
          <option value="B- 2.75" data-year="First Year">
            B- 2.75
          </option>
          <option value="C+ 2.50" data-year="First Year">
            C+ 2.50
          </option>
          <option value="C 2.25" data-year="First Year">
            C 2.25
          </option>
          <option value="D 2.00" data-year="First Year">
            D 2.00
          </option>
          <option value="F 0.00" data-year="First Year">
            F 0.00
          </option>
        </select>
      </div>
    </form>
  );
}

export default CgpaInpute;
