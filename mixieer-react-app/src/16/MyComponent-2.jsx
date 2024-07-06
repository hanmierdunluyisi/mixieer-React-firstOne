import { useEffect,useState } from "react"

function MyComponent() {  
    const [width,setWidth] = useState(window.innerWidth)
    const [hight,setHight] = useState(window.innerHeight)



    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("ENENT LISTENER ADDED")
        return ()=>{
            window.removeEventListener("resize",handleResize);
            console.log("ENENT LISTENER REMOVED")
            }
        },[width,hight]);
    
    useEffect(()=>{
        document.title=`Size: ${width}x ${hight}`
    },[width,hight])

    function handleResize() {
        setWidth(window.innerWidth)
        setHight(window.innerHeight)
    }

    return (
        <div>
            <p>Window With: {width}</p>
            <p>Window hight: {hight}</p>
        </div>
    )
}

export default MyComponent