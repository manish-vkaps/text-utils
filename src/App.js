import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

let name = "Hello James";
function App() {
  const [mode, setMode] = useState("light"); // whether dark mode enable and disable
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark mode";

      setInterval(() => {
        document.title = "TextUtils amazing";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-light mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  handing="Enter the text to analyz below"
                  mode={mode}
                />
              }
            />

            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
