import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navebar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  
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

  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      // setInterval(() => {
      //   document.title= 'TestUtils is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title= 'Install TestUtils now'
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>

      <BrowserRouter>
        <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About mode={mode}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
