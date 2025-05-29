import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
const Timer = () => {
    const styles ={
      container:{
          display:"flex",
          alignItems:"center",
          border:"1px dotted black",
          width:"200px",
          margin:"auto",
          justifyContent:"center",
          flexDirection:"column",
          height:"fit-content",
          boxShadow: "0px 2px 10px black"

      },
      btnCon:{
        display:"flex",
        alignItems:"center",
        backgroundColor:"gray",
        height:"10vh",
        gap:".2rem",
        width:"100%",
        margin:"auto"
    },
    button:{
        backgroundColor:"red",
        padding:".9rem",
        border:"none",
        borderRadius:"5px",
        marginLeft:".4rem",
        color:"white",
      },
    button1:{
        backgroundColor:"#0e5510",
        color:"white",
        padding:".9rem",
        border:"none",
        borderRadius:"5px",
        marginLeft:".1rem"
      }
    };
    const [timer, setTimer] = useState(0);
    const [timing, setTiming] = useState(false);
    const startTimer = ()=>{
        setTimer((prev)=>(prev + 1))
    };
    useEffect(() => {
        let timeInterval;
        if (timing) {
           timeInterval = setTimeout(() => {
                startTimer()
            }, 1000);
        }
    }, [timing,timer]);
    const disable = ()=>{
        document.querySelectorAll(".btn").forEach(eachBtn => {
            eachBtn.disabled = true;
            eachBtn.style.backgroundColor = "gray"
            eachBtn.style.cursor ="not-Allowed"
            eachBtn.style.boxShadow ="0px 2px 10px black"
        });
    };
    const start = ()=>{
        setTiming(true)
        disable()
    }
    const stop = ()=>{
        setTiming(false)
        document.querySelectorAll(".btn").forEach(eachBtn => {
            eachBtn.disabled = false;
            eachBtn.style.backgroundColor = "#0e5510"
            eachBtn.style.cursor ="pointer"
            eachBtn.style.boxShadow ="0px"
        });
    }
    const reset = ()=>{
        setTiming(false)
        setTimer(0)
        document.querySelectorAll(".btn").forEach(eachBtn => {
            eachBtn.disabled = false;
            eachBtn.style.backgroundColor = "#0e5510"
            eachBtn.style.cursor ="pointer"
            eachBtn.style.boxShadow ="0px"
        });
    }
    
  return (
    <>
     <div style={styles.container}>
        <h2>Timer:{timer}</h2>
        <div className="btncon" style={styles.btnCon}>
            <button style={styles.button1} onClick={start} className='btn'>Start</button>
            <button style={styles.button} onClick={stop} className='btn2'>Stop</button>
            <button style={styles.button} onClick={reset} className='btn3'>Reset</button>
        </div>
     </div>
    </>
  )
};

export default Timer