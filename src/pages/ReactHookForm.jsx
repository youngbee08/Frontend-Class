import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup";
const signUpFormSchema = yup.object({
    email:yup.string().email("Enter a valid email").required("Email is required"),
    name:yup.string().required("Name is required").min(3, "Name must be at least 3 characters").max(20, "Name cannot be more than 20 characters"),
    password:yup.string().required("Password is required").min(6, "Password must be at least 6 characters")
})
const ReactHookForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(signUpFormSchema)
    });
    const [signingUp, setSigningUp]= useState(false);
    const submitForm = async (data)=>{
        console.log(data)
    }
  return (
    <div>
        <h1>Signup Using React Hook Form</h1>
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="name"
                id="name"
                placeholder="Enter your name"
                {...register("name")}
                />
                <p style={{color:"red"}}>{errors.name && errors.name.message}</p>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email"
                id="email"
                placeholder="joe@example.com"
                {...register("email")}
                />
               <p style={{color:"red"}}>{errors.email && errors.email.message}</p>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password"
                id="password"
                placeholder="******"
                {...register("password")}
                />
                <p style={{color:"red"}}>{errors.
                password && errors.password.message}</p>
            </div>
            <div>
                <button>SignUp</button>
            </div>
        </form>
    </div>
  )
}

export default ReactHookForm