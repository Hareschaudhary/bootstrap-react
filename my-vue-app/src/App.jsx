import React, { useEffect, useState } from 'react';
import './App.css'


function App() {
  let [range, setrange] = useState("0");
  let [number, setnumber] = useState(false);
  let [spesiylkey, setspesiylkey] = useState(false);
  


  useEffect(() => {
    let pass = "";
    let string = "abcdefghijklmnopqrstuvwxyz"
    if (number === true) {
      string += "0123456789"
    }
    if (spesiylkey === true) {
      string += "@!#$%^&*(){}?"
    }
    for (let i = 1; i <= range; i++) {
      pass += string[Math.floor(Math.random() * string.length)]
      let h = document.querySelector(".inp")
      h.setAttribute("value", pass)
    }
  }, [change, numclick, key])
  function change() {
    let a = document.querySelector(".range").value
    setrange(a)
  };

  function numclick() {
    let a = document.querySelector("#number")
    a.classList.toggle("true")
    let b = a.classList.contains("true")
    setnumber(b)
  };

  function key() {
    let a = document.querySelector("#spesiylkey")
    a.classList.toggle("true")
    let b = a.classList.contains("true")
    setspesiylkey(b)
  };

  function copyclick(){
    document.querySelector(".inp").style.color="red"
    alert("text copid")
  }
  
  return (
    <>
      <div className="section" style={{  width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className='container' style={{padding:"50px",boxShadow:"0px 0px 5px black",borderRadius:"10px"}}>
        <div style={{fontSize:"22px",textAlign:"center"}}>
              <h3>genrate your password</h3>
            </div>
          <div className="pass" style={{ display: "flex",justifyContent:"space-between", alignItems: "center", padding: "0px 1px 0px 5px", borderRadius: "5px",margin:"20px 0px",boxShadow:"0px 0px 5px black" }}>
            <input
              type="text"
              readOnly
              placeholder='your password'
              className='inp'
              style={{
                fontSize: "22px",
                padding: "3px 0px 3px 3px",
                width:"80%",
                outline:"none",
                border:"none"
              }} />
            <button
            onClick={copyclick}
              style={{ backgroundColor: "blue" }}>Copi</button>
          </div>
          <div className="buttons" style={{ display: "flex",justifyContent:"center" ,alignItems:"center"}}>
            <div style={{display:"flex",alignItems:"center",margin:"0px 5px",fontSize:"18px"}}>
              <label htmlFor="range">length</label>
              <input id='range' type="range" className='range' onChange={change} />
              <h3>({range})</h3>
            </div>
            <div style={{display:"flex",alignItems:"center",margin:"0px 5px",fontSize:"18px"}}>
              <label htmlFor="number">NumberAllow</label>
              <input type="checkbox" id='number' onClick={numclick} />
            </div>
            <div style={{display:"flex",alignItems:"center",margin:"0px 5px",fontSize:"18px"}}>
              <label htmlFor="spesiylkey">specialkeyAllow</label>
              <input type="checkbox" id='spesiylkey' onClick={key} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
