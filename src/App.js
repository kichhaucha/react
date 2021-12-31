
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textedit from "./components/Textedit";
import React, { useState } from 'react'
import Myalert from "./components/Myalert";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"


function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>
  {
    setalert({
      mess:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);

  }

  const toggle=  ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showalert("dark is enable","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("light is enable","success")
    }
  }
  return (
    <>
    <Router>
<Navbar my="TextUtils" txt="About"  mode={mode} toggle={toggle}/>
<Myalert  alert={alert}         />
<div className="container my-5">

<Switch>

                  <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
<Textedit text="below text area "  header="Enter the text to analyze below"   showalert={showalert}/>
            
</Route>
        </Switch>
</div>
</Router>
{/* <About  /> */}
</>
  );
}

export default App;
