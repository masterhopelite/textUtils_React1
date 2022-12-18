import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
//import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { Routes } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //alert
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

  //whether DArk mode on or not
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };
  // const toggleMode1 = () => {
  //   if (mode == "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#33712d00";
  //     showAlert("Dark mode has been enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // };

  return (
    <>
      {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes> */}
        <TextForm
          heading="Enter text to analyze"
          mode={mode}
          showAlert={showAlert}
        ></TextForm>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
