

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './components/defaultLayout/DefaultLayout'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
// import Product from './components/products/Product'
// import Contact from './pages/contact/Contact'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/*" element={<DefaultLayout />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    {/* <Product/> */}
     
     {/* <Contact/> */}
    </>
  )
}

export default App
