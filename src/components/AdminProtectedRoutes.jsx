import { useContext, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { adminContext } from "../contexts/AdminContext";
const AdminProtectedRoutes = () => {
 const {isAdmin,setIsAdmin} = useContext(adminContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if (!isAdmin) {
        toast.warning("You have to be an admin")
        navigate("/dashboard")
    }
  },[{isAdmin,navigate}])
  return isAdmin ? <Outlet/> : null
}

export default AdminProtectedRoutes