import { useState, useRef,useEffect } from "react"

function Stopwatch() {
    const [isRunning,setIsRunning] = useState(false)
    const [elapsedTime,setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(()=>{
        if(isRunning) {
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current)

            },10)
        }
        return()=>{
            clearInterval(intervalIdRef.current)

        }

    },[isRunning])

    function start() {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime;

    }

    function stop() {
        setIsRunning(false)

    }

    function reset(){
        setElapsedTime(0)
        setIsRunning(false)

    }
    function formatTime() {
        let hours = Math.floor(elapsedTime/(1000*60*60)); 
        let mintse = Math.floor(elapsedTime/(1000*60)%60); 
        let secnds = Math.floor(elapsedTime/(1000)%60); 
        let millisecnds = Math.floor(elapsedTime % 1000 / 10); 

        hours = String(hours).padStart(2,"0")
        mintse = String(mintse).padStart(2,"0")
        secnds = String(secnds).padStart(2,"0")
        millisecnds = String(millisecnds).padStart(2,"0")

        return `${hours}:${mintse}:${secnds}:${millisecnds}`
    }


    return(
        <div className="stopWatch"> 
            <div className="display">
                {formatTime()} 
            </div>
            <div className="controls">
                <button className="start-button" onClick={start}>Start</button>
                <button className="stop-button" onClick={stop}>Stop</button>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div> 
        </div>
    ) 
}

export default Stopwatch 