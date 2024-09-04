import React, { useState } from 'react'
import Navbar from './component/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Home from './pages/Home/home'
import Footer from './component/footer/footer'
import LoginPopup from './component/loginPopup/loginPopup'
// import Verify from './pages/verify/verify'
import Myorders from './pages/myOrders/myorder'
import Profiles from './pages/profiles/profile'
import Update from './pages/profiles/update'

function App() {
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          {/* <Route path='/verify' element={<Verify/>}/> */}
          <Route path='/myorders' element={<Myorders/>}/>
          <Route path='/profiles' element={<Profiles />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
