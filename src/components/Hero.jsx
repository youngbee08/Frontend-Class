import Button from "./Button"
import Input from "./Input"
import Icon from "./Icon"
const Hero = () =>{
    const message = () =>{
        alert("Nothing Found")
    };
    return (
        <div className="hero">
            <h1>Welcome To My Website</h1>
            <p className="heroP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, recusandae. Commodi, provident quisquam ratione id nihil dolorum laborum aperiam assumenda! Dignissimos maiores illum nihil ullam odit labore ipsam, velit numquam ducimus aspernatur nulla error exercitationem ea nemo natus eos vero reiciendis facilis quibusdam, perspiciatis a tempore laboriosam libero dolorem. Doloremque?</p>
            <div className="heroBtnContainer">
                <Input/>
                <Button text="Search" handleClick={message} icon={<Icon cName={"fas fa-magnifying-glass"} />} cName={"heroBtn"}/>
            </div>
        </div>
    )
};
export default Hero