import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
     setText(text.toUpperCase())
     props.showAlert("Converted to upperCase ", "success")
    }
    const handleLowerCase = () => {
        
     setText(text.toLowerCase())
     props.showAlert("Converted to LowerCase ", "success")

    }
    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Remove extra spaces ", "success")

    }
    const handleCopyText = () => {
        let text= document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard ", "success")

    }
    const handleEraseText = () => {
        let newText= "";

        setText(newText)
        props.showAlert("Erase text successfully", "success")

    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    // text = "new text "  // Wrong way to change text
    // setText("new text") //   Correct way to change text

  return (
<>
    <div className='container' style= {{color: props.mode==='dark'? 'white' :'#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode==='dark'? 'grey' :'white', color:props.mode==='dark'? 'white' :'#042743'}} id="myBox" rows="8" ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpClick}>Covert To UpperCase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleLowerCase}>Covert To lowerCase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleRemoveSpace}>Remove extra spaces</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleCopyText}>copy Text</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleEraseText}>Erase Text</button>
    </div>

    <div className="container my-3" style= {{color: props.mode==='dark'? 'white' :'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words and {text.length} character</p>
        <p>you need{0.008 * text.split(" ").length} minutes to read the above text</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the above box to preview it here"}</p>
    </div>

    </>
  )
}
