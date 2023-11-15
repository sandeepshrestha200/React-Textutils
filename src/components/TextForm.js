import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleonChange}
          ></textarea>
          <div className="my-2">
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
              Convert to UpperCase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>
              Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary :</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes requires to read.</p>
        <h2 className="my-3">Preview :</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
