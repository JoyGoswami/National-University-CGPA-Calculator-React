import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { useContext } from "react";
import AppContextProvider, { AppContext } from "./storage/AppStorage";

function App() {
  return (
    <>
      <AppContextProvider>
        <Header />
        <Main />
        <Footer />
      </AppContextProvider>
    </>
  );
}

export default App;
