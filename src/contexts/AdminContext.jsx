import { createContext, useState } from "react"

export const adminContext = createContext();
const AdminProider = ({children}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const setAdminState = ()=>{
    try {
      if (isAdmin) {
        setIsAdmin(false);
        localStorage.setItem("Admin-State", JSON.stringify([isAdmin]));
      } else {
        setIsAdmin(true);
        localStorage.setItem("Admin-State", JSON.stringify([isAdmin]));
      }
    } catch (error) {
      console.log(error);
    }
  }
  const value = {
    isAdmin,
    setIsAdmin,
    setAdminState
  }
  return (
    <adminContext.Provider value={value}>
      {children}
    </adminContext.Provider>
  )
}

export default AdminProider