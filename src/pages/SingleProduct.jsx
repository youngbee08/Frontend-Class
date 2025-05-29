import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {id} = useParams();
    console.log(id);
    const [product, setProduct] = useState([]);
    const [productCount, setProductCount] = useState(1);
    const addProduct = ()=>{
        setProductCount((prev)=>(prev+1))
    };
    const removeProduct = ()=>{
        setProductCount((prev)=>prev === 1 ? (setProductCount(1)):(prev-1))
    }    
    const [isLoading, setIsLoading] = useState(false);
    const displayProduct = async ()=>{
        setIsLoading(true)
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const oneProduct = await res.json();
            setProduct(oneProduct);
        } catch (error) {
            console.log(error);
        } finally{
            setIsLoading(false)
        }
    };
    useEffect(() => {
        displayProduct()
    }, [])
    const procuctQuantity = useRef()    
    const reduceQuantityBtn = document.getElementById("reduceQuantityBtn");
  return (
    <section>
        {
            isLoading ? (
                <h1>Loading Product...</h1>
            ) : (
                product.length === 0 ? (
                    <h1>Product Unavailable</h1>
                ):(
                    <> 
                       <div className='eachFakeStoreProduct2'>
                        <img src={product.image} alt="no-img" className='fakeStoreProductImages2'/>
                        <div className='secDiv'>
                            <h1 className='h12'>{product.title}</h1>
                            <p><i><b>Description:{product.description}</b></i></p>
                            <span><b>Price:${product.price}</b></span>
                            <div className="btn">
                                <button className='cartBtn'>Add To Cart</button>
                                <button className='quantityBtn' onClick={addProduct}>+</button>
                                <span ref={procuctQuantity}>{productCount}</span>
                                <button className='quantityBtn' id='reduceQuantityBtn' onClick={removeProduct}>-</button>
                            </div>
                        </div>
                    </div>
                    </>
                )
            )
        }
    </section>
  )
}

export default SingleProduct