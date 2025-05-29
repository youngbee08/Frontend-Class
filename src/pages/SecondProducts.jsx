import React, { useContext, useEffect } from 'react'
import { productContext } from '../contexts/ProductContext'
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const SecondProduct = () => {
    const {product, fetchProducts} = useContext(productContext);
    useEffect(() => {
        fetchProducts()
    }, [])
    const addToCart = ()=>{
        toast.success("Added To Cart");
    };
    // useEffect(()=>{
    // }, [{addToCart}])
  return (
    <section className='
    fakeStoreProducts'> 
        {
            product.length === 0 ?(
                <p>No Products</p>
            ) : (
                product.map((ele,index)=>(
                    <div key={index} className='eachFakeStoreProduct'>
                        <Link to={`/secondproducts/${ele.id}`} className='eachImgAndTitle'>
                            <img src={ele.image} alt={`${ele.title} img`} className='fakeStoreProductImages'/>
                            <h1>{ele.title}</h1>
                        </Link>
                        <div style={{display:"flex", gap:".4rem",alignItems:"center",position:"absolute",bottom:"0",justifyContent:"space-between",width:"80%",borderTop:"1px solid #022841"}}>
                            <h2>${ele.price}</h2>
                            <button onClick={addToCart} className='cartBtn'><i className='fas fa-cart-plus' style={{color:"white", fontSize:"20px"}}></i></button>
                        </div>
                 </div>
                ))
            )
        }
    </section>
  )
}

export default SecondProduct