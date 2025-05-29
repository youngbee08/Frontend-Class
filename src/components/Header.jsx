import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import CartIcon from "./cartIcon";
import Icon from "./Icon";
import { authContext } from "../contexts/AuthContext";
import { useContext } from "react";




const Header = ()=>{
    const navigate = useNavigate()
    const display = ()=>{
        alert("Button Clicked")
    };
    const displayBarContent = ()=>{
        document.querySelector("#hiddenNav").classList.toggle("displayBar");
        document.querySelector(".bar").classList.toggle("fa-x")
    };
    const {isAuthenticated} = useContext(authContext)
    const signOut = ()=>{
        localStorage.removeItem("accessToken")
        navigate("/signin")
    };
    return(
        <>
            <div className="header">
                <div className="bar-con" onClick={displayBarContent}>
                    <i className="fas fa-bars bar"></i>
                </div>
                <h1>Logo</h1>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    {/* <Link to="/products">Products</Link> */}
                    <Link to="/secondProducts">Second Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/admin">Admin</Link>
                    {
                        isAuthenticated()?(
                        <button to='' onClick={signOut}>Sign Out</button>
                        ) : (
                            <div>
                                <Link to="/signin">Sign In</Link>
                                <Link to="/signup">Sign Up</Link>
                            </div>
                        )
                    }            
                </div>
                {/* <Button text="Get Started" handleClick={display} icon={<Icon cName="fas fa-arrow-right"/>}/> */}
                <CartIcon/>
            </div>
            <div id="hiddenNav" className="hiddenNav">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/admin">Admin</Link>
                {
                    isAuthenticated()?(
                        <button to='' onClick={signOut}>Sign Out</button>
                    ) : (
                        <div>
                            <Link to="/signin">Sign In</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    )
                }                   
            </div>
        </>
    )
};
export default Header