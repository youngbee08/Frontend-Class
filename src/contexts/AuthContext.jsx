import { createContext, useState } from "react";
import { toast } from "sonner";

export const authContext = createContext();
const AuthProvider = ({children}) =>{
    const [processing, setProcessing] = useState(false)
    const [vResponse, setVResponse] = useState({})
    const base_Url = import.meta.env.VITE_BASE_URL;    
    const [signingIn, setSigningIn] = useState(false)
    const isAuthenticated = ()=>{
        const accessToken = localStorage.getItem("accessToken")
        if(accessToken){
            return true
        } else{
            return false
        }
    }
    const verifyAccount = async (token) =>{
        setProcessing(true)
        try {
            const response = await fetch(`${base_Url}/verify/${token}`, {
                method:"POST",
                headers:{'Content-Type': 'application/json'},
                body:''
            });
            const data = await response.json();
            setVResponse(data)
        } catch (error) {
            console.log(error)
        } finally {
            setProcessing(false)
        }
    }
    const user ={
        name:"AbdulAzeem",
        email:"abdulazeem@dev.com",
        phone:"09087657788"
    }
    const signin = async (formData) =>{
        setSigningIn(true)
        try {
            const res = await fetch(`${base_Url}/signIn`, {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData)
            })
            const data = await res.json()
            console.log(data);
            const {accessToken,status,message} = data;
            if (status === 'error') {
                return toast.error(message)
            }
            localStorage.setItem("accessToken", accessToken);
            window.location.href='/dashboard';
        } catch (error) {
            console.log(error)
        } finally{
            setSigningIn(false)
        }
    };
    const value = {
        user,
        isAuthenticated,
        signin,
        signingIn,
        vResponse,
        verifyAccount,
        processing
    }
    return (
        <authContext.Provider value={value}>
           {children}
        </authContext.Provider>
    )
}
export default AuthProvider