import React from 'react'
import "./Style.css"

const App = () => {
  let time = new Date();
 time = time.getHours()

let greeting=``;
let csstyle ={ };

  if (time>=3 && time<12) {
    greeting =`GOOD morning`
    csstyle.color = "green"

  }else if (time>=12 && time<20) {
    greeting = `GOOD afternoon`
    csstyle.color = "orange"
  } 
  else 
   { greeting =`good night`}
   csstyle.color = "purple"
  return (
    <>
    <span>
    <h1>
    Hello folks,  <span style={csstyle}> {greeting} </span>
    </h1>
    </span>
    </>
  )
}

export default App