import React, { Suspense, lazy } from 'react'
import {Link, Route, Routes,BrowserRouter, Navigate} from "react-router-dom"
import './Styles/Menu.css'
const Home=lazy(()=>import("./Home"))
const Register=lazy(()=>import("./Register"))
const Student=lazy(()=>import("./Student"))

export const Menu = () => {
  return (
    <BrowserRouter>
    <ul className='menu'>
     <li><Link to='home'>Home</Link></li>
     <li><Link to='register'>Register</Link></li>
     <li><Link to='student'>Student</Link></li>
    </ul>
    <Suspense>
     <Routes>
        <Route path="/home" element={ <Home/>} />
        <Route path="register" element={ <Register/>} />
        <Route path="/student"  element={ <Student/>} />
        <Route path="*" element={ <Navigate to="home"/> } />
       
     </Routes>
     </Suspense>
    </BrowserRouter>
  )
}
