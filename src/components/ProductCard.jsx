import Button from "./Button";
const ProductCard = ({productName,price})=>{
    const addToCart = () =>{
        alert("Added to cart")
    };
    const styles = {
        h2:{
            color:"red",
            fontSize:"25px"
        },
        p:{
            color:"blue",
            fontSize:"15px"
        }
    }
    return (
        <div className="productCard">
            <h2 style={styles.h2}>{productName}</h2>
            <p style={styles.p}>Price: ${price}</p>
            <Button text="Add To Cart" handleClick={addToCart}/>
        </div>
    );
};
export default ProductCard;