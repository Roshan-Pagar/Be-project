import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Contactus from './Components/Contactus'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
     path:'/login',
     element:<Login/> 
    }
    ,
    {
      path:'/contactus',
      element: <Contactus/>
    }
  ])

  const current_theme = localStorage.getItem('current_theme')
  const [theme,setTheme]=useState(current_theme ? current_theme : 'light');
  
  useEffect(()=>{
    localStorage.setItem('current_theme',theme);
  },[theme])
  return (
    <div>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <RouterProvider router={router}/>
      </div>
    </div>

  )
}

export default App
