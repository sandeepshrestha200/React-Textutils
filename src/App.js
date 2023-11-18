import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      // document.body.style.backgroundColor ="black";
      document.body.classList.remove("bg-light");
      document.body.classList.remove("text-dark");

      document.body.classList.add("bg-secondary");
      document.body.classList.add("text-light");

      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      // document.body.style.backgroundColor ="white";
      document.body.classList.remove("bg-secondary");
      document.body.classList.remove("text-light");

      document.body.classList.add("bg-light");
      document.body.classList.add("text-dark");

      showAlert("Light mode Enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
