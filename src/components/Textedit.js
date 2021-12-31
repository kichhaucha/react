import React, { useState }  from 'react'

export default function Textedit(props) {
    const [text, setText] = useState('');
    const handleupclick=()=>{
        // console.log("handleupperclick" + text)
        let newText=text.toLocaleUpperCase()
        setText(newText)
        props.showalert("changed upper case","success")
        
 
        
       
    
}

const handleonchange=(event)=>{
    setText(event.target.value)
    // console.log("handleonchange")
    // showalert("Copy is enable","success")
}
const extraspace=()=>{
    let space=text.replace(/  +/g, ' ');  
    setText(space)
    props.showalert("removed spaces","success")
}

const cleartext=()=>{
    let text=('') 
    setText(text)
    props.showalert("cleared text","success")
 
}
const copytext=()=>{
    let text=document.getElementById('mybox')
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showalert("copies text","success")
   
 
}

const handclicklowe=()=>{
    let newsText=text.toLocaleLowerCase()   
    setText(newsText)
    props.showalert("changed lower case","success")

 
}
    return (    
        <>
    <div className='container' style={{color: props.mode=== 'dark'?'white':'#042743'}}
 >
        <h1>{props.header}</h1>
      <div className="mb-3">
      <textarea className="form-control border border-#adb5bd border border-2"  onChange={handleonchange} value={text} style={{backgroundColor:props.mode==='dark'?'grey':"white",color: props.mode=== 'dark'?'white':'#042743'}}  id="mybox" rows="8"></textarea>
      </div>
       <button className="btn btn-primary mx-3" onClick={handleupclick} >convert to upper class</button>
       <button className="btn btn-primary mx-3" onClick={handclicklowe} >convert lower class</button>
       <button className="btn btn-primary mx-3" onClick={extraspace} >clear extra space</button>
       <button className="btn btn-primary mx-3" onClick={cleartext} >cleae text</button>
       <button className="btn btn-primary mx-3" onClick={copytext} >copy text</button>
    </div>   
    <div className="container my-4" style={{color: props.mode=== 'dark'?'white':'#042743'}}  >
        <h1>Your text summery</h1>
        <p> <strong> {text.split(" ").length} </strong> words and <strong>{text.length}</strong>  charecters</p>
        <p><strong>{0.008 * text.split(" ").length}</strong> minute read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter the somthing text box above the preview it here"}</p>
        </div> 
      
    </>
    )
}
