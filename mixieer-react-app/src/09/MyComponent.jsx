import {useState} from "react"

function MyComponent() {
    const [name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState(1);
    const [comment,setComment] = useState("");
    const [payment, setPayment] = useState("Visa");
    const [shinpping, setShinpping] = useState("");


    const handelNameChange = (e) => {
        setName(e.target.value)
    }
    

    function handelQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handelCommentChange(event) {
        setComment(event.target.value)
    }


    function handelPaymentChange(event) {
        setPayment(event.target.value)
    }

    function handelShinppingChange(event) {
        setShinpping(event.target.value)
    }

    return (
        <div>
            <input onChange={(e) => handelNameChange(e)}></input>
            <p>Name: {name}</p>

            <input onChange={handelQuantityChange} type="number"></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handelCommentChange}
            placeholder="Enter delivery instructions"></textarea>
            <p>Commment: {comment}</p>

            <select value={payment} onChange={handelPaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
            </select>

            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick UP"
                        checked = {shinpping === "Pick UP"}
                            onChange={handelShinppingChange}>
                </input>
                Pick up
            </label>
            <label>        
                <input type="radio" value="Delivery"
                        checked = {shinpping === "Delivery"}
                            onChange={handelShinppingChange}>
                </input>
                Delivery
            </label>
            <p>Shipping: {shinpping}</p>

        </div>
        
    )

}

export default MyComponent