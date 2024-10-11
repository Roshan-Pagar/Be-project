import React from 'react'
import './Navbar.css'
import logo_light from '../assets/logo-black.png'
import logo_dark from '../assets/logo-white.png'
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toogle_light from '../assets/night.png'
import toogle_dark from '../assets/day.png'

const Navbar = ({theme,setTheme}) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }
  return (
    <div className='navbar'>
        <img src={theme == 'light' ?   logo_light : logo_dark} alt="logo" className="logo"/>
        <ul>
            <li> <a href='/home'>Home</a></li>
            <li> <a href='/contactus'>Contact us</a></li>
            <li><a href='/login'>Login</a></li>
            <li><a href='/login'>Take test</a></li>
        </ul>

        <div className='search-box'>
            <input type='text' placeholder='search'/>
            <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt=""/>
        </div>

        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ?toogle_light : toogle_dark} alt="" className='toggle-icon'/>
    </div>
  )
}

export default Navbar
