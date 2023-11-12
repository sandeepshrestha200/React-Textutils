import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your text");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleonChange}
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
      </div>
    </>
  );
}
