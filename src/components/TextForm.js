import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  };

  const handleclearClick = () => {
    let newText = "";
    setText(newText); 
    props.showAlert("Text cleared", "success")
  };

  const handlecopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success")
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra Spaces removed", "success")
}

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  // text= "new text" //wrong way to change the state
  //setText("new text") //correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#212529':'white' , color: props.mode==='dark'?'white':'black'}}
            id="myBox" rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handlecopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>time taken to read is {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}
