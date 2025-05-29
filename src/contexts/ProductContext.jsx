import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const productContext = createContext();
const ProductProvider = ({children}) =>{
    const [product, setProduct] = useState([]);
    const [singleProduct, setSingleProduct] = useState([]);
    const baseURL = import.meta.env.VITE_PRODUCTS_BASE_URL;
    const fetchProducts = async () =>{
        try {
            console.log("Hi");
            const res = await fetch(`${baseURL}`);
            const data = await res.json();
            setProduct(data.products);
            console.log(product);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchSingleProduct = async (id) =>{
        try {
            const res = await fetch(`${baseURL}/${id}`)
            const data = await res.json();
            setSingleProduct(data.product)
        } catch (error) {
            console.log(error);
        }
    }
    const value = {
        product,
        fetchProducts,
        fetchSingleProduct,
        singleProduct,
    }
    return (
        <productContext.Provider value={value}>{children}</productContext.Provider>
    )
};
export default ProductProvider