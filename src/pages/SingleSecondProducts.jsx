import React, { useContext, useEffect, useRef, useState } from 'react'
import { productContext } from '../contexts/ProductContext'
import { useParams } from 'react-router-dom';

const SingleSecondProducts = () => {
    const [productCount, setProductCount] = useState(1);
    const {fetchSingleProduct,singleProduct} = useContext(productContext);
    const {id} = useParams();
    const procuctQuantity = useRef()    
    const addProduct = ()=>{
        setProductCount((prev)=>(prev+1))
    };
    const removeProduct = ()=>{
        setProductCount((prev)=>prev === 1 ? (setProductCount(1)):(prev-1))
    };
    useEffect(() => {
     fetchSingleProduct(id)
    }, [])
  return (
    <section>
        {
            singleProduct.length === 0 ? (
                <h1>Unable to load Product</h1>
            ):(
                <div className='eachFakeStoreProduct2'>
                    <img src={singleProduct.image} alt="no-img" className='fakeStoreProductImages2'/>
                    <div className='secDiv'>
                        <h1 className='h12'>{singleProduct.title}</h1>
                        <p><i><b>Description:{singleProduct.description}</b></i></p>
                        <span><b>Price:${singleProduct.price}</b></span>
                        <div className="btn">
                            <button className='cartBtn'>Add To Cart</button>
                            <button className='quantityBtn' onClick={addProduct}>+</button>
                            <span ref={procuctQuantity}>{productCount}</span>
                            <button className='quantityBtn' id='reduceQuantityBtn' onClick={removeProduct}>-</button>
                       </div>
                    </div>
                </div>
            )
        }
    </section>
  )
}

export default SingleSecondProducts