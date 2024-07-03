import { useState } from "react"

function MyComponent() {  
    const [foods,setFoods] = useState(["Apple","Orange","Banana"]) 

    function handelAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value ="";
        setFoods(foods => [...foods,newFood])

    }

    function handelRemoveFood(index) {
        setFoods(foods.filter((_,i)=> i!== index));

    }

    return (
        <div>
            <h2>List of Foof</h2>
            <ul>
                {foods.map((food,index) => <li key={index} onClick={() => handelRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Entry food name"/>
            <button onClick={handelAddFood}>add food </button>
        </div>
    )
}

export default MyComponent