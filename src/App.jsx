import "./App.css"
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Header from "./components/Header"
import SingleProduct from "./pages/SingleProduct"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Provider from "./components/Provider"
import Child1 from "./components/Child1"
import Child2 from "./components/Child2"
import Child3 from "./components/Child3"
import AuthProvider from "./contexts/AuthContext"
import SecondProduct from "./pages/SecondProducts"
import ProductProvider from "./contexts/ProductContext"
import SingleSecondProducts from "./pages/SingleSecondProducts"
import Dashboard from "./pages/Dashboard"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Signin from "./pages/Signin"
import Admin from "./pages/Admin"
import AdminProtectedRoutes from "./components/AdminProtectedRoutes"
import { Toaster } from "sonner"
import AdminProider from "./contexts/AdminContext"
import Signup from "./pages/Signup"
import VerifyAccount from "./pages/VerifyAccount"
import ReactHookForm from "./pages/ReactHookForm"
const App = () => {
  return (
    <div>
      <AuthProvider>
        <AdminProider>
          <ProductProvider>
            <BrowserRouter>
              <Header/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/verify/:token" element={<VerifyAccount/>}/>
                <Route path='/products' element={<Product/>}/>
                <Route path='/products/:id' element={<SingleProduct/>}/>
                <Route path='/secondProducts' element={<SecondProduct/>}/>
                <Route path='/secondProducts/:id' element={<SingleSecondProducts/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/signup' element={<Signup/>}/>e
                <Route path="/signup-react" element={<ReactHookForm/>}/>
                <Route element={<ProtectedRoutes/>}>
                  <Route element={<AdminProtectedRoutes/>}>
                    <Route path='/admin' element={<Admin/>}/>
                  </Route>
                  <Route path='/dashboard' element={<Dashboard/>}/>
                </Route>
                <Route path='/*' element={<NotFound/>}/>
              </Routes>
            </BrowserRouter>
            <Toaster richColors position="top-right" expand closeButton visibleToasts={1}/>
          </ProductProvider>
        </AdminProider>
      </AuthProvider>
    </div>
  )
}

export default App