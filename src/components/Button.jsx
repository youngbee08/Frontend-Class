const Button = ({text,handleClick,icon,cName})=>{
    return(
    <button onClick={handleClick} className={`allBtn ${cName}`}>{text} {icon}</button>
    )
};
export default Button