import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

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

  const toogleMode = () => {
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
      <Navbar title="TextUtils" mode={mode} toggleMode={toogleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
