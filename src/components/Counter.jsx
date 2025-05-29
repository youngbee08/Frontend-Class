import { useState } from "react";
import Button from "./Button";

const Counter = ()=>{
    const [number, setNumber] = useState(10)
    const minusOne = ()=>{
        setNumber((prev)=>(prev-1))
    };
    const addOne = ()=>{
        setNumber((prev)=>(prev+1))
    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const logIn = ()=>{
        setIsLoggedIn(true)
    };
    const logOut = ()=>{
        setIsLoggedIn(false)
    };
    return(
        <>
            <div className="count">
                <h2>Count</h2>
                <p>Number: {number}</p>
                <Button text={"Minus 1"} handleClick={minusOne}/>
                <Button text={"Add 1"} handleClick={addOne}/>
            </div>
            <div className="count">
                {
                    isLoggedIn ? (
                        <div>
                            <p>Welcome</p>
                            <Button text={"Log Out"} handleClick={logOut}/>
                        </div>
                    ) : (
                        <div>
                            <p>Please Log In</p>
                            <Button text={"Log In"} handleClick={logIn}/>
                        </div>
                    )
                }
            </div>
        </>
    )
};
export default Counter