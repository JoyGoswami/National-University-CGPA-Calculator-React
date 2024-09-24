import { createContext, useReducer, useState } from "react";

export const AppContext = createContext([]);

function dataReducer(current, action) {
  if (action.type === "SUBMIT_INPUT") {
    const inputObj = action.payload.inputData;
    const subjectData = action.payload.subjectData;
    let filteredSubject = subjectData[inputObj.subject].filter(
      (subject) => subject.year === inputObj.year
    );
    return filteredSubject;
  }
}

const AppContextProvider = ({ children }) => {
  const subjectData = {
    English: [
      {
        subjectName: "English",
        year: "First Year",
        subjectCode: {
          "English Reading Skills": "sub code",
          "English Writing Skills": "sub code",
          "Introduction to Poetry": "sub code",
          "Introduction to Prose: Fiction and Non- Fiction": "sub code",
          "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction":
            "4",
          "History of the Emergence of Independent Bangladesh": "sub code",
        },
        subjects: [
          "English Reading Skills",
          "English Writing Skills",
          "Introduction to Poetry",
          "Introduction to Prose: Fiction and Non- Fiction",
          "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction",
          "History of the Emergence of Independent Bangladesh",
        ],
        credit: {
          "English Reading Skills": "4",
          "English Writing Skills": "4",
          "Introduction to Poetry": "4",
          "Introduction to Prose: Fiction and Non- Fiction": "4",
          "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction":
            "4",
          "History of the Emergence of Independent Bangladesh": "4",
        },
      },
      {
        subjectName: "English",
        year: "Second Year",
        subjectCode: {
          "Introduction to Drama": "sub code",
          "Romantic Poetry": "sub code",
          "Advanced Reading and Writing": "sub code",
          "Sociology of Bangladesh  Or  Bangladesh Society and Culture":
            "sub code",
          "Political Organisation and The Political System of UK and USA":
            "sub code",
          "Viva-Voce": "sub code",
        },
        subjects: [
          "Introduction to Drama",
          "Romantic Poetry",
          "Advanced Reading and Writing",
          "Sociology of Bangladesh  Or  Bangladesh Society and Culture",
          "Political Organisation and The Political System of UK and USA",
          "Viva-Voce",
        ],
        credit: {
          "Introduction to Drama": "4",
          "Romantic Poetry": "4",
          "Advanced Reading and Writing": "4",
          "Sociology of Bangladesh  Or  Bangladesh Society and Culture": "4",
          "Political Organisation and The Political System of UK and USA": "4",
          "Viva-Voce": "2",
        },
      },
      {
        subjectName: "English",
        year: "Third Year",

        subjectCode: {
          "Elizabethan and Jacobean Drama": "sub code",
          "16th & 17th Century Poetry": "sub code",
          "17th and 18th Century Non-Fictional Prose": "sub code",
          "Restoration and Eighteenth Century Fiction": "sub code",
          "Restoration and Eighteenth Century Poetry and Drama": "sub code",
          "Victorian Poetry": "sub code",
          "Introduction to Literary Criticism (Up to Romantic Period)": "4",
          "Introduction to Linguistics": "sub code",
        },
        subjects: [
          "Elizabethan and Jacobean Drama",
          "16th & 17th Century Poetry",
          "17th and 18th Century Non-Fictional Prose",
          "Restoration and Eighteenth Century Fiction",
          "Restoration and Eighteenth Century Poetry and Drama",
          "Victorian Poetry",
          "Introduction to Literary Criticism (Up to Romantic Period)",
          "Introduction to Linguistics",
        ],
        credit: {
          "Elizabethan and Jacobean Drama": "4",
          "16th & 17th Century Poetry": "4",
          "17th and 18th Century Non-Fictional Prose": "4",
          "Restoration and Eighteenth Century Fiction": "4",
          "Restoration and Eighteenth Century Poetry and Drama": "4",
          "Victorian Poetry": "4",
          "Introduction to Literary Criticism (Up to Romantic Period)": "4",
          "Introduction to Linguistics": "4",
        },
      },
      {
        subjectName: "English",
        year: "Fourth Year",
        subjectCode: {
          "Nineteenth Century Novel": "sub code",
          "Twentieth Century Poetry": "sub code",
          "Modern Drama": "sub code",
          "Twentieth Century Novel": "sub code",
          "American Poetry": "sub code",
          "American Literature: Fiction and Drama": "sub code",
          "Classics in Translation": "sub code",
          "Literary Criticism (From Victorian to Modern Age)": "sub code",
          "Continental Literature Or Approaches and Methods of Language Teaching":
            "sub code",
          "Viva-voce": "sub code",
        },
        subjects: [
          "Nineteenth Century Novel",
          "Twentieth Century Poetry",
          "Modern Drama",
          "Twentieth Century Novel",
          "American Poetry",
          "American Literature: Fiction and Drama",
          "Classics in Translation",
          "Literary Criticism (From Victorian to Modern Age)",
          "Continental Literature Or Approaches and Methods of Language Teaching",
          "Viva-voce",
        ],
        credit: {
          "Nineteenth Century Novel": "4",
          "Twentieth Century Poetry": "4",
          "Modern Drama": "4",
          "Twentieth Century Novel": "4",
          "American Poetry": "4",
          "American Literature: Fiction and Drama": "4",
          "Classics in Translation": "4",
          "Literary Criticism (From Victorian to Modern Age)": "4",
          "Continental Literature Or Approaches and Methods of Language Teaching":
            "4",
          "Viva-voce": "4",
        },
      },
    ],
    Bangla: [
      {
        subjectName: "Bangla",
        year: "First Year",
        subjectCode: {
          "History and Culture of Bangladesh and Bengalees (From Ancients to 2000 AD)":
            "sub code",
          "History of Bangla Language and Functional Bangla": "sub code",
          "Bangla Poetry-1": "sub code",
          "Bangla Novel-1": "sub code",
          "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction":
            "sub code",
          "History of the Emergence of Independent Bangladesh": "sub code",
        },
        subjects: [
          "History and Culture of Bangladesh and Bengalees (From Ancients to 2000 AD)",
          "History of Bangla Language and Functional Bangla",
          "Bangla Poetry-1",
          "Bangla Novel-1",
          "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction",
          "History of the Emergence of Independent Bangladesh",
        ],
        credit: {
          "History and Culture of Bangladesh and Bengalees (From Ancients to 2000 AD)":
            "4",
          "History of Bangla Language and Functional Bangla": "4",
          "Bangla Poetry-1": "4",
          "Bangla Novel-1": "4",
          "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction":
            "4",
          "History of the Emergence of Independent Bangladesh": "4",
        },
      },
      {
        subjectName: "Bangla",
        year: "Second Year",
        subjectCode: {
          "History of Bengali Literature -1 (Ancients and Medieval)":
            "sub code",
          "Poetry of Medieval Age": "sub code",
          "Bengali Poetry -2": "sub code",
          "Bengali Drama -1": "sub code",
          "Sociology of Bangladesh  Or  Bangladesh Society and Culture":
            "sub code",
          "History of the Emergence of Independent Bangladesh": "sub code",
          "English (Compulsory)": "Non-credit",
        },
        subjects: [
          "History of Bengali Literature -1 (Ancients and Medieval)",
          "Poetry of Medieval Age",
          "Bengali Poetry -2",
          "Bengali Drama -1",
          "Sociology of Bangladesh  Or  Bangladesh Society and Culture",
          "History of the Emergence of Independent Bangladesh",
          "English (Compulsory)",
        ],
        credit: {
          "History of Bengali Literature -1 (Ancients and Medieval)": "4",
          "Poetry of Medieval Age": "4",
          "Bengali Poetry -2": "4",
          "Bengali Drama -1": "4",
          "Sociology of Bangladesh  Or  Bangladesh Society and Culture": "4",
          "History of the Emergence of Independent Bangladesh": "4",
          "English (Compulsory)": "0",
        },
      },
      {
        subjectName: "Bangla",
        year: "Third Year",
        subjectCode: {
          "History of Bangla Literature-II, First part of Modern Age (1801-1947)":
            "sub code",
          "Poetry of Ancient and Medieval Age": "sub code",
          "Bangla Short Story-I": "sub code",
          "Theory of Folklor and Bangla Folk Literature": "sub code",
          "Literary forms, Literary principles (Theory Rasa), Ornamentation, Rhythm":
            "sub code",
          "Bangla Prose-I": "sub code",
          "Bangla Comedy and Literature of Traveling": "sub code",
          "Bangla Novel-2": "sub code",
        },
        subjects: [
          "History of Bangla Literature-II, First part of Modern Age (1801-1947)",
          "Poetry of Ancient and Medieval Age",
          "Bangla Short Story-I",
          "Theory of Folklor and Bangla Folk Literature",
          "Literary forms, Literary principles (Theory Rasa), Ornamentation, Rhythm",
          "Bangla Prose-I",
          "Bangla Comedy and Literature of Traveling",
          "Bangla Novel-2",
        ],
        credit: {
          "History of Bangla Literature-II, First part of Modern Age (1801-1947)":
            "4",
          "Poetry of Ancient and Medieval Age": "4",
          "Bangla Short Story-I": "4",
          "Theory of Folklor and Bangla Folk Literature": "4",
          "Literary forms, Literary principles (Theory Rasa), Ornamentation, Rhythm":
            "4",
          "Bangla Prose-I": "4",
          "Bangla Comedy and Literature of Traveling": "4",
          "Bangla Novel-2": "4",
        },
      },
      {
        subjectName: "Bangla",
        year: "Fourth Year",
        subjectCode: {
          "History of Bangla Literature-3 (Development of Bangladeshi Literature Since 1947 to 2000)":
            "sub code",
          "Bangla Novel-3": "sub code",
          "Western Literary Theores and Methods of Literary Criticism": "4",
          "Bangla Drama-2": "sub code",
          "Classical Literature (Translated)": "sub code",
          "Bangla Short-Stories-2": "sub code",
          "Bangla Poetry-3": "sub code",
          "Phonetics and  Linguistics": "sub code",
          "Literature on Bangladesh Liberation War": "sub code",
          "Viva-voce": "sub code",
        },
        subjects: [
          "History of Bangla Literature-3 (Development of Bangladeshi Literature Since 1947 to 2000)",
          "Bangla Novel-3",
          "Western Literary Theores and Methods of Literary Criticism",
          "Bangla Drama-2",
          "Classical Literature (Translated)",
          "Bangla Short-Stories-2",
          "Bangla Poetry-3",
          "Phonetics and  Linguistics",
          "Literature on Bangladesh Liberation War",
          "Viva-voce",
        ],
        credit: {
          "History of Bangla Literature-3 (Development of Bangladeshi Literature Since 1947 to 2000)":
            "4",
          "Bangla Novel-3": "4",
          "Western Literary Theores and Methods of Literary Criticism": "4",
          "Bangla Drama-2": "4",
          "Classical Literature (Translated)": "4",
          "Bangla Short-Stories-2": "4",
          "Bangla Poetry-3": "4",
          "Phonetics and  Linguistics": "4",
          "Literature on Bangladesh Liberation War": "4",
          "Viva-voce": "4",
        },
      },
    ],
    Accounting: [
      {
        subjectName: "Accounting",
        year: "First Year",
        subjectCode: {
          "Principles of Accounting": "sub code",
          "Principles of Finance": "sub code",
          "Principles of Marketing": "sub code",
          "Principles of Management": "sub code",
          "Micro Economics": "sub code",
          "History of the Emergence of Independent Bangladesh": "sub code",
        },
        subjects: [
          "Principles of Accounting",
          "Principles of Finance",
          "Principles of Marketing",
          "Principles of Management",
          "Micro Economics",
          "History of the Emergence of Independent Bangladesh",
        ],
        credit: {
          "Principles of Accounting": "4",
          "Principles of Finance": "4",
          "Principles of Marketing": "4",
          "Principles of Management": "4",
          "Micro Economics": "4",
          "History of the Emergence of Independent Bangladesh": "4",
        },
      },
      {
        subjectName: "Accounting",
        year: "Second Year",
        subjectCode: {
          "Comuter and Information Technology (Accountinpg)": "sub code",
          "Taxation in Bangladesh": "sub code",
          "Intermediate Accounting": "sub code",
          "Business Mathematics": "sub code",
          "Business Statistics (In English)": "sub code",
          "Macro Economics": "sub code",
          "Business Communication and Report Writing (In English)": "sub code",
        },
        subjects: [
          "Comuter and Information Technology (Accountinpg)",
          "Taxation in Bangladesh",
          "Intermediate Accounting",
          "Business Mathematics",
          "Business Statistics (In English)",
          "Macro Economics",
          "Business Communication and Report Writing (In English)",
        ],
        credit: {
          "Comuter and Information Technology (Accountinpg)": "4",
          "Taxation in Bangladesh": "4",
          "Intermediate Accounting": "4",
          "Business Mathematics": "4",
          "Business Statistics (In English)": "4",
          "Macro Economics": "4",
          "Business Communication and Report Writing (In English)": "4",
        },
      },
      {
        subjectName: "Accounting",
        year: "Third Year",
        subjectCode: {
          "Audit and Assurance": "sub code",
          "Advanced Accounting-I": "sub code",
          "Cost Accounting": "sub code",
          "Management Accounting (In English)": "sub code",
          "Business and Commercial Laws": "sub code",
          Entrepreneurship: "sub code",
          "Financial Management": "sub code",
          "Banking and Insurance Theories, Laws and Accounts": "sub code",
        },
        subjects: [
          "Audit and Assurance",
          "Advanced Accounting-I",
          "Cost Accounting",
          "Management Accounting (In English)",
          "Business and Commercial Laws",
          "Entrepreneurship",
          "Financial Management",
          "Banking and Insurance Theories, Laws and Accounts",
        ],
        credit: {
          "Audit and Assurance": "4",
          "Advanced Accounting-I": "4",
          "Cost Accounting": "4",
          "Management Accounting (In English)": "4",
          "Business and Commercial Laws": "4",
          Entrepreneurship: "4",
          "Financial Management": "4",
          "Banking and Insurance Theories, Laws and Accounts": "4",
        },
      },
      {
        subjectName: "Accounting",
        year: "Fourth Year",
        subjectCode: {
          "Accounting Theory": "sub code",
          "Advanced Auditing & Professional Ethics": "sub code",
          "Accounting Information Systems": "sub code",
          "Organizational Behavior": "sub code",
          "Corporate Law and Practices": "sub code",
          "Working Capital Management And Financial Statement Analysis":
            "sub code",
          "Advanced Accounting-II": "sub code",
          "Investment Analysis and Portfolio Management": "sub code",
          "Research Methodology (In English)": "sub code",
          "Viva-voce": "sub code",
        },
        subjects: [
          "Accounting Theory",
          "Advanced Auditing & Professional Ethics",
          "Accounting Information Systems",
          "Organizational Behavior",
          "Corporate Law and Practices",
          "Working Capital Management And Financial Statement Analysis",
          "Advanced Accounting-II",
          "Investment Analysis and Portfolio Management",
          "Research Methodology (In English)",
          "Viva-voce",
        ],
        credit: {
          "Accounting Theory": "4",
          "Advanced Auditing & Professional Ethics": "4",
          "Accounting Information Systems": "4",
          "Organizational Behavior": "4",
          "Corporate Law and Practices": "4",
          "Working Capital Management And Financial Statement Analysis": "4",
          "Advanced Accounting-II": "4",
          "Investment Analysis and Portfolio Management": "4",
          "Research Methodology (In English)": "4",
          "Viva-voce": "4",
        },
      },
    ],
  };

  const gradesDataArr = [
    "Select",
    "A+ 4.00",
    "A 3.75",
    "A- 3.50",
    "B+ 3.25",
    "B 3.00",
    "B- 2.75",
    "C+ 2.50",
    "C 2.25",
    "D 2.00",
    "F 0.00",
  ];

  const [reducerData, dispatchData] = useReducer(dataReducer, []);
  const [sgpaArr, setSgpaArr] = useState([]);
  const [creditArr, setCreditArr] = useState([]);
  const [isclicked, setIsClicked] = useState(false);
  const [cgpaArr, setCgpaArr] = useState([]);

  function handleSubmit(data) {
    dispatchData({
      type: "SUBMIT_INPUT",
      payload: {
        inputData: data,
        subjectData: subjectData,
      },
    });
  }

  function handleResultSubmit(resultData, creditData) {
    setSgpaArr((prev) => [...prev, resultData]);
    setCreditArr((prev) => [...prev, creditData]);
  }

  function handleClickFromHome(data) {
    if (isclicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  }
  let sgpaObj = {};
  sgpaArr.map(
    (sgpa) => (sgpaObj[`${Object.keys(sgpa)}`] = sgpa[Object.keys(sgpa)])
  );
  let sgpaValueArr = Object.values(sgpaObj);

  let addSgpaValue = 0;

  if (sgpaValueArr.length !== 0) {
    addSgpaValue = sgpaValueArr.reduce((accumulator, current) => {
      return accumulator + current;
    });
  }

  let creditObj = {};
  creditArr.map(
    (credit) =>
      (creditObj[`${Object.keys(credit)}`] = parseFloat(
        credit[Object.keys(credit)]
      ))
  );
  let creditValueArr = Object.values(creditObj);

  let addCreditValue = 0;

  if (creditValueArr.length !== 0) {
    addCreditValue = creditValueArr.reduce((accumulator, current) => {
      return accumulator + current;
    });
  }

  let gpa = addSgpaValue / addCreditValue;

  let { percentage, grade } = calcPercentage(gpa);

  function handleCgpaInput(data) {
    setCgpaArr((prev) => [...prev, data]);
  }
  let cgpaObj = {};
  cgpaArr.map((cgpa) => {
    cgpaObj[`${Object.keys(cgpa)}`] = cgpa[Object.keys(cgpa)];
  });

  let cgpaValueArr = Object.values(cgpaObj);
  let addCgpaValue;
  if (cgpaValueArr.length !== 0) {
    addCgpaValue = cgpaValueArr.reduce((accumulator, current) => {
      return accumulator + current;
    });
  }
  let cgpa = addCgpaValue / cgpaValueArr.length;

  let { grade: cgpaGrade, percentage: cgpaPercentage } = calcPercentage(cgpa);

  function calcPercentage(gpa) {
    let percentage;
    let grade;
    if (gpa == 4.0) {
      percentage = "80% or above";
      grade = "A+";
    } else if (gpa >= 3.75) {
      percentage = "75% to less than 80%";
      grade = "A";
    } else if (gpa >= 3.5) {
      percentage = "70% to less than 70%";
      grade = "A-";
    } else if (gpa >= 3.25) {
      percentage = "65% to less than 70%";
      grade = "B+";
    } else if (gpa >= 3.0) {
      percentage = "60% to less than 65%";
      grade = "B";
    } else if (gpa >= 2.75) {
      percentage = "55% to less than 60%";
      grade = "B-";
    } else if (gpa >= 2.5) {
      percentage = "50% to less than 55%";
      grade = "C+";
    } else if (gpa >= 2.25) {
      percentage = "45% to less than 50%";
      grade = "C";
    } else if (gpa >= 2.0) {
      percentage = "40% to less than 45%";
      grade = "D";
    } else if (gpa >= 0.0) {
      percentage = "Less than 40%";
      grade = "F";
    }
    return { percentage: percentage, grade: grade };
  }

  return (
    <AppContext.Provider
      value={{
        subjectData: subjectData,
        gradesDataArr: gradesDataArr,
        reducerData: reducerData,
        gpa: gpa,
        percentage: percentage,
        grade: grade,
        isclicked: isclicked,
        cgpaGrade: cgpaGrade,
        cgpaPercentage: cgpaPercentage,
        cgpa: cgpa,
        handleSubmit: handleSubmit,
        handleResultSubmit: handleResultSubmit,
        handleClickFromHome: handleClickFromHome,
        handleCgpaInput: handleCgpaInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
