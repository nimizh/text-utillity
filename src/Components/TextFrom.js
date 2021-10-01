import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    // console.log("uPPER CASE BUTTON IS FIRED");
    const newText = text.toUpperCase();
    // to change the text as we we click the button
    setText(newText);
    props.showAlert("Text is converted into UpperCase", "success");
  };

  const handleDownClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text is converted into LowerCase", "success");
  };

  const handleReplace = () => {
    const newText = text.replace(text, "This is your new text");
    // console.log("text must be changed now");
    setText(newText);
    props.showAlert("Your text is replaced", "success");
  };

  const handleClear = () => {
    const newText = text.replace(text, "");
    setText(newText);
    props.showAlert("Your text is cleared", "success");
  };

  const handleSpaces = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("your extra spaces is handled", "success");
  };
  const handleOnChange = (event) => {
    // console.log("handling on change");
    //  to let us write in the textarea we have to update the value for settext else it wont let us wriote there
    setText(event.target.value);
  };
  // States in React
  const [text, setText] = useState("Enter your text here");
  // here default value for text is 'Enter your text here" now if i want to change or overwrite it
  // I cannot do text ="nimish"
  // I have to target setText Value
  // i.e setText("My new text value is this")
  //
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.subheading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "#042743" : "black",
            }}
          ></textarea>
          <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>
            Click to convert to Upper Case
          </button>
          <button className="btn btn-primary mx-2" onClick={handleDownClick}>
            Click to convert to lower Case
          </button>
          <button className="btn btn-primary mx-2" onClick={handleReplace}>
            Click to replace the statement
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>
            Click to clear.
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>
            Click to manage extra Spaces
          </button>
        </div>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} charcaters.
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
