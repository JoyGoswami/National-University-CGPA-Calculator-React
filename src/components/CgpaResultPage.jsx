import CgpaDisplayResult from "./CgpaDisplayResult";
import CgpaInpute from "./CgpaInpute";
import style from "./CgpaResultPage.module.css";
import React from "react";

function CgpaResultPage() {
  return (
    <div className="main_inner_cgpa_result_page">
      <CgpaDisplayResult />
      <CgpaInpute />
    </div>
  );
}

export default CgpaResultPage;
