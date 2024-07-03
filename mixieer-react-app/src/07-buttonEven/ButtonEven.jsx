


function ButtonEven() {
    // const handleClick = () => console.log("OUCH!");
    // const handleClick2 = (name) => console.log(`${name} OUCH!`);

    // let count = 0;
    // const handelClick = (name) => {
    //     if(count < 3) {
    //         count++ 
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }
    //     else {
    //         console.log(`${name} stop clicking me !`)
    //     }
    //     }

    // const handelClick = (e) => console.log(e)
    const handelClick = (e) => e.target.textContent = "OUCH 🥹";
    return (
        
        <button onDoubleClick={(e)=> handelClick(e)}>Click me 😂</button>
    );

}
 
export default ButtonEven