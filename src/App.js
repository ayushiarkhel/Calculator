import React, { useState } from 'react'
import "./App.css";


  const App = ()=>{
  
      const [input, setInput] = useState("");
      const equalbutton = ()=>{
        try {
          setInput(eval(input));
         }
         catch(error){
          setInput("Error");
         }
    };
    const resetbutton=()=>{
          setInput("");
    };
    const backbutton=()=>{
         setInput(input.slice(0,input.length-1));
    };
  
return (
  <>
     <div className="calculator">
      <input className='value' type="text" value={input}></input>
       <button  className="numclear"  onClick={resetbutton}>Clear</button>
       <button  className="numclear" onClick={backbutton} >Back</button>
       <button name="/"className="num" onClick={(e)=>setInput(input.concat(e.target.name))} >/</button>
       <button name="*" className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>*</button>
       <button name="7" className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>7</button>
       <button name="8" className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>8</button>
       <button name="9" className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>9</button>
       <button name="-" className="num plus" onClick={(e)=>setInput(input.concat(e.target.name))}>-</button>
       <button name="4" className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>4</button>
       <button name="5" className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>5</button>
       <button name="6" className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>6</button>
       <button name="3" className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>1</button>
       <button name="2" className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>2</button>
       <button name="1" className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>3</button>
       <button name="+" className="num plus" onClick={(e)=>setInput(input.concat(e.target.name))}>+</button>
       <button name="0" className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>0</button>
       <button name="." className="num" onClick={(e)=>setInput(input.concat(e.target.name))}>.</button>
       <button  className="num equal" onClick={equalbutton} >=</button>
       
       </div>
       
  </>
  )
}

export default App;



