import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Product = () => {
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const addToCart = ()=>{
        alert("Added To Cart");
    }
    
    const displayProducts = async ()=>{
        setIsLoading(true)
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const allProducts = await res.json();
            setProductList(allProducts);
        } catch (error) {
            console.log(error);
        } finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
      displayProducts()
    }, [])
  return (
    <section>
        <h1>Shop By Category</h1>
        {
            isLoading ? (
                <h1>Loading Products...</h1>
            ): (
                <section className='fakeStoreProducts'>
                {
                    productList.length === 0 ? (
                        <h1>No Products</h1>
                    ):(
                        productList.map((ele, index)=>(
                            <div key={index} className='eachFakeStoreProduct'>
                                <Link to={`/products/${ele.id}`} className='eachImgAndTitle'>
                                        <img src={ele.image} alt={`${ele.title} img`} className='fakeStoreProductImages'/>
                                        <h1>{ele.title}</h1>
                                </Link>
                                <div style={{display:"flex", gap:".4rem",alignItems:"center",position:"absolute",bottom:"0",justifyContent:"space-between",width:"80%",borderTop:"1px solid #022841"}}>
                                    <h2>${ele.price}</h2>
                                    <button className='cartBtn' onClick={addToCart}><i className='fas fa-cart-plus' style={{color:"white", fontSize:"20px"}}></i></button>
                                </div>
                            </div>
                        ))
                    )
                }
            </section>
            )
        }
    </section>
  )
}

export default Product