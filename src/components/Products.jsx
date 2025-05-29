import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import CartIcon from "./cartIcon";
import { useEffect } from "react";
const Product = ()=>{
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [cartCount, setCartCount] = useState(0);
    // const addToCart = ()=>{
    //     setCartCount((prev)=>(prev + 1));
    //     <CartIcon text={cartCount}/>
    // };
    const fetchProduct = async () => {
        setIsLoading(true)
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProduct(data)            
        } catch (error) {
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
      fetchProduct()
    
    }, [])
    
    return(
        <section >
            <h1 style={{fontSize:"40px"}}>Shop By Category</h1>
            {/* <Button text={"Check Our Products"} icon={<Icon cName={"fas fa-arrow-right"}/>} handleClick={fetchProduct}/> */}
            {
                isLoading ? (
                    <div>
                        <p>Loading Products....</p>
                    </div>
                ) : (
                    <section className="fakeStoreProducts">
                        {
                            product.length === 0 ? (
                                <div>
                                    <p>No Products!</p>
                                </div>
                            ) : (
                                product.map((ele, index)=>(
                                    <div key={index} className="eachFakeStoreProduct">
                                        <img src={ele.image} alt="no-img" className="fakeStoreProductImages"/>
                                        <p>Name:{ele.title}</p>
                                        <span>Price:${ele.price}</span>
                                        <p>Description:{ele.description}</p>
                                        <Button text={"Add To Cart"}icon={<Icon cName={"fas fa-plus"}/>} />
                                    </div>
                                ))
                            )
                        }
                    </section>
                )
            }
        </section>
    )
};
export default Product