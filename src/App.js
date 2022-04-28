import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Loginform from './Components/LoginForm'
import Signupform from './Components/SignupForm'
import AxiosFetch from './Components/AxiosFetch'

export const context=React.createContext()

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <context.Provider value={"Welcome to my application"}>
      <Header />
      </context.Provider>
      <Routes>
        <Route exact path='/login' element={<Loginform />} />
        <Route path='/signup' element={<Signupform />} />
        <Route path='/axiosfetch' element={<AxiosFetch />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
