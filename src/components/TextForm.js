import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Uppercase","success");
  };

  const handleOnChange = (event)=>{
    console.log("on change clicked");
    setText(event.target.value);
  }

  const handleExtraSpaces = (event)=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState("Enter text here 2");
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="txtmybox" className="form-label">
          Email address
        </label>
        <textarea
          className="form-control"
          id="txtmybox"
          placeholder=""
          rows="4"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>

        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={handleExtraSpaces}
        >
          Handle extra spaces
        </button>
      </div>
    </div>
    <div className="container my-3">
        <h1>Your Text summary</h1>
        <p> {text.split} characters and  {text.length} characters </p>
    </div>
    </>
  );
}
