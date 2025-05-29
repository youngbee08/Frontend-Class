import ProductCard from "./ProductCard";
const ProductList = ()=>{
    return (
        <>
            <div className="productList">
                <ProductCard productName={"Sneakers"} price={20.43}/>
                <ProductCard productName={"Bag"} price={12.12}/>
                <ProductCard productName={"Trouser"} price={49.04}/>
                <ProductCard productName={"Fan"} price={37.99}/>
            </div>
        </>
    )
};
export default ProductList;
