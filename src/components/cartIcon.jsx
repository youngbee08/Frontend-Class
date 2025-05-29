import { useState } from "react";

const CartIcon = ({text})=>{
    const [cartCount, setCartCount] = useState(0);
    return (
        <i className="fas fa-cart-plus">{text}</i>
    )
};
export default  CartIcon