import { useState } from "react"

function MyComponent() {  
    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {Year:carYear,
                        Make:carMake,
                        Model:carModel}
        setCars(c=>[...c,newCar]);
        // resets
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        // setCars(cars.filter(c=>[...c,index]))
        setCars(c=>c.filter((_,i) => i !== index));

    }

    function handleYearChange(event){
        setCarYear(event.target.value)

    }
    function handleMakeChange(event){
        setCarMake(event.target.value)
    }
    function handleModelChange(event){
        setCarModel(event.target.value)

    }

    return (
        <div>
            <h2>List of Car Objcet</h2>
            <ul>
                {cars.map((car,index)=>
                <li key={index} onClick={()=>handleRemoveCar(index)}>{car.Year} {car.Make} {car.Model}</li>
                )}
            </ul>
            <input type="number" value={carYear} onChange={(e)=> handleYearChange(e)}/><br/>
            <input type="text" value={carMake} onChange={handleMakeChange}placeholder="Enter car make"/><br/>
            <input type="text" value={carModel} onChange={(e)=> handleModelChange(e)} placeholder="Enter car model"/><br/>
            <button onClick={handleAddCar}>Add car</button>
            <button onClick={()=>handleRemoveCar()}>Remove car</button>

        </div>
    )
}

export default MyComponent 