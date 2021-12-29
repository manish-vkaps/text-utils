import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const textClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="cotainer"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="my-3">{props.handing} </h1>
        <div>
          <textarea
            id="mybox"
            className="form-control"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mt-3 mx-1 text-bold"
          onClick={handleLoClick}
        >
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mt-3 mx-1" onClick={textClear}>
          Text Clear
        </button>
        <button className="btn btn-primary mt-3 mx-1" onClick={handleCopy}>
          Text Copy
        </button>
        <button className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>
          Convert To uppercase
        </button>
        <button
          className="btn btn-primary mt-3 mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743ck" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}

export default TextForm;
