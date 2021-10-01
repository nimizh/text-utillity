import "./App.css";
import Navbar from "./Components/Navbar";

import React, { useState } from "react";
import TextFrom from "./Components/TextFrom";
import Alerts from "./Components/Alerts";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Which mode is to be enable
  const [text, settext] = useState("Enable Dark mode");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      settext("Enable Light mode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      settext("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="React"
        heading="Application"
        mode={mode}
        toggleMode={toggleMode}
        text={text}
      />
      <Alerts alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* exact will let reaact do exact matching and without exact will be partialmatching by react */}
        {/* <Route exact path="/"> */}
        <TextFrom
          showAlert={showAlert}
          subheading="Enter your title here"
          mode={mode}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
