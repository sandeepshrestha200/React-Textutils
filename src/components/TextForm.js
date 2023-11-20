import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase.", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase.", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared.", "success");
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard.", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed.", "success");
  };

  return (
    <>
      <div className="container">
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#869bad" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <div className="my-2">
            <button
              disabled={text.length === 0}
              className="btn btn-primary m-2"
              onClick={handleUpClick}
            >
              Convert to UpperCase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary m-2"
              onClick={handleLowClick}
            >
              Convert to Lowercase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary m-2"
              onClick={handleClearClick}
            >
              Clear Text
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary m-2"
              onClick={handleCopy}
            >
              Copy Text
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary m-2"
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary :</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        {/* <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p> */}
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes requires to read.
        </p>
        <h2 className="my-3">Preview :</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
