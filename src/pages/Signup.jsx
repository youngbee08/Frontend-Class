import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
    const navigate = useNavigate()
    const base_Url = import.meta.env.VITE_BASE_URL;    
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        age:'',
        password:''
    });
    const [signingUp, setSigningUp] = useState(false)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setSigningUp(true)
        try {
            const res = await fetch(`${base_Url}/signup`, {
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData)
            })
            const data = await res.json();
            if(data.status === "success"){
            toast.success(data.message)
            navigate("/signin")
        }
        } catch (error) {
            console.log(error)
        } finally {
            setSigningUp(false)
        }
    };
    
    const handleInput = (e)=>{
        const {name,value} = e.target;
        setFormData((prev)=>({...prev, [name]:value}))
    };
  return (
    <div>
        <h1>Sign Up</h1>
        <form id='form' className="signup-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleInput}
            type="text"
            name="name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleInput}
            type="email"
            name="email"
            placeholder="doe@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            onChange={handleInput}
            type="date"
            name="age"
            placeholder="Enter your age"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInput}
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" disabled={signingUp} className="btn-signup">
            {
                signingUp?(
                    'Signing Up......'
                ):(
                    'Sign Up'
                )
            }
        </button>
      </form>
    </div>
  )
}

export default Signup