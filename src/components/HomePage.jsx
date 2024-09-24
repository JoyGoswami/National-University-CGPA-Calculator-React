import style from "./HomePage.module.css";

import React, { useContext, useRef, useState } from "react";

import BgImage from "../assets/bg_icon.svg";
import Button from "./Button";
import { AppContext } from "../storage/AppStorage";

function HomePage() {
  const {
    handleSubmit,
    reducerData,
    subjectData,
    handleClickFromHome,
    isclicked,
  } = useContext(AppContext);
  const subjectRef = useRef();
  const yearRef = useRef();
  const subjectNames = Object.keys(subjectData);

  let [displayInputWarning, setDisplayInputWarning] = useState(false);

  function handleForm(event) {
    event.preventDefault();

    const subjectInput = subjectRef.current.value;
    const yearInput = yearRef.current.value;

    if (
      subjectInput !== "Select Your Subject" &&
      yearInput !== "Select Your Year"
    ) {
      setDisplayInputWarning(false);
      handleSubmit({
        subject: subjectRef.current.value,
        year: yearRef.current.value,
      });
    } else {
      setDisplayInputWarning(true);
    }
  }

  function handleClickHome() {
    handleClickFromHome(false);
  }

  return (
    <div className={style.main_inner_home}>
      <img className={style.bg_img} src={BgImage} alt="Background Imgae" />

      <form onSubmit={handleForm} className={style.input_year_sub_form}>
        <select
          className={`${style.input_field} ${
            displayInputWarning && style.active
          }`}
          name="select_sub"
          id="select_sub"
          required
          ref={subjectRef}
          defaultValue="Select Your Subject"
        >
          <option disabled>Select Your Subject</option>
          {subjectNames.map((subjectName) => {
            return (
              <option key={subjectName} value={subjectName}>
                {subjectName}
              </option>
            );
          })}
        </select>
        <select
          className={`${style.input_field} ${
            displayInputWarning && style.active
          }`}
          name="select_year"
          id="select_year"
          required
          ref={yearRef}
          defaultValue="Select Your Year"
        >
          <option disabled>Select Your Year</option>
          <option value="First Year">First Year</option>
          <option value="Second Year">Second Year</option>
          <option value="Third Year">Third Year</option>
          <option value="Fourth Year">Fourth Year</option>
        </select>
        <input className={style.input_field} type="submit" value="Submit" />
      </form>
      <p className={style.or}>OR</p>

      <Button
        handleClickHome={handleClickHome}
        text="Calculate All Year CGPA"
        type="button"
        m="8px 0 0 0"
      />
    </div>
  );
}

export default HomePage;
