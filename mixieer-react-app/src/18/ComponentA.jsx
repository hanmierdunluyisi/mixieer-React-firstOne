import ComponentB  from "./ComponentB.jsx";
import { createContext, useState } from "react";

export const UserContext = createContext();

function ComponentA() {

    const [user,SetUser] = useState("BroCode")

    function handleUserChange() {
        SetUser("BroYes")

    }

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <button onClick={handleUserChange}></button>
            <UserContext.Provider value={user}>
            <ComponentB/>
            </UserContext.Provider>
        </div>
    )

}

export default ComponentA 