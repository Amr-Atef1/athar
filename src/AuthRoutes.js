import React from 'react'
import { ForgotPass, GetCode, NewPassword, Register, SignIn, Terms } from './component';
import { Routes,Route } from 'react-router-dom';
const AuthRoutes = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/ForgotPass' element={<ForgotPass/>}/>
    <Route path="/GetCode" element={<GetCode/>}/>
    <Route path="/NewPassword" element={<NewPassword/>}/>
    <Route path="/Terms" element={<Terms/>}/>
  </Routes>
  </>
  )
}

export default AuthRoutes