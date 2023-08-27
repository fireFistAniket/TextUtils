import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopyClick = () => {
    let textArea = document.getElementById("floatingTextarea2");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCapital = ()=>{
    const lower = text.toLowerCase();
    let newText =  lower.charAt(0).toUpperCase() + lower.slice(1);
    setText(newText);
}
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="form-floating"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{
              height: 200,
              backgroundColor: props.mode === "light" ? "rgb(63 63 223)" : "white",
              color: props.mode === "light" ? "white" : "black"
            }}
          ></textarea>
        </div>
      </div>
      <button disabled={text.length===0} onClick={handleUpperClick} className="btn btn-primary my-3 mx-3">
        UpperCase
      </button>
      <button disabled={text.length===0} onClick={handleLowerClick} className="btn btn-primary my-3 mx-3">
        LowerCase
      </button>
      <button disabled={text.length===0} onClick={handleClear} className="btn btn-primary my-3 mx-3">
        Clear
      </button>
      <button disabled={text.length===0} onClick={handleCopyClick} className="btn btn-primary my-3 mx-3">
        Copy
      </button>
      <button disabled={text.length===0} onClick={handleCapital} className="btn btn-primary my-3 mx-3">
        1st letter Capital
      </button>
      <hr />
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>Your text summery</h1>
        <p>
          {(text.split(/\s+/).filter((element)=>{return element.length !==0}).length)} words & {text.length} chracters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} read</p>
        <hr />
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
