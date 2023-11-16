import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor ="black";
      document.body.classList.remove("bg-light");
      document.body.classList.remove("text-dark");

      document.body.classList.add("bg-secondary");
      document.body.classList.add("text-light");
    } else {
      setMode("light");
      // document.body.style.backgroundColor ="white";
      document.body.classList.remove("bg-secondary");
      document.body.classList.remove("text-light");

      document.body.classList.add("bg-light");
      document.body.classList.add("text-dark");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toogleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
