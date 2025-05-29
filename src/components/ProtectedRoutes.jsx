import { useContext, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";
import { toast } from "sonner";

const ProtectedRoutes = () => {
    const {isAuthenticated} = useContext(authContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if (!isAuthenticated()) {
            toast.warning("You have to be logged in")
            navigate("/signin")
        }
    },[isAuthenticated,navigate])
  return isAuthenticated ? <Outlet/>:null
}

export default ProtectedRoutes