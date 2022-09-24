// import logo from './logo.svg';
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";
import { BrowserRouter, Route,  Routes } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
    <BrowserRouter>
    <Routes>
        {/* NAVBAR */}
        <Navbar
          title="TextUtils"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
        />

        {/* alert */}
        <Alert alert={alert} />

        {/* TEXT FORM */}
        <div className="container my-4">


          <Route path="/about" element = {<About/>}>
            <About />
          </Route>
          <Route path="/" element = {<TextForm showAlert={showAlert}heading="Enter Text Below"mode={mode}/>}>
          </Route>
        </div>
    </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
