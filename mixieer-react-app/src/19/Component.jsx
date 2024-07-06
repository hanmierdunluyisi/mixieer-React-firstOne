import { useEffect,useRef } from "react"


function MyComponent() {
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    

    useEffect(()=>{
        console.log("COMPONENT,RENDERED");
        // console.log(inputRef)
    },[]);

    function handleClick1(){  
        inputRef1.current.focus() ;
        inputRef1.current.style.backgroundColor = "yellow"
    }
    function handleClick2(){  
        inputRef2.current.focus() ;
        inputRef2.current.style.backgroundColor = "yellow"
    }
    
    function handleClick3(){  
        inputRef3.current.focus() ;
        inputRef3.current.style.backgroundColor = "yellow"
    }
    
    

    return(
        <div>
            <button onClick={handleClick1}>Click me!</button><br/>
            <input ref={inputRef1}/><br/>
            <button onClick={handleClick2}>Click me!</button><br/>
            <input ref={inputRef2}/><br/>
            <button onClick={handleClick3}>Click me!</button><br/>
            <input ref={inputRef3}/><br/>
        </div>
        
    )

}

export default MyComponent 