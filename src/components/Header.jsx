import React, { useState } from 'react'
import '../App.css'
import '../css/Header.css'
import { FaBasketShopping } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';


function Header() {
    const [theme, setTheme] = useState(false)
    const chnageTheme = ()=>{
        const root = document.getElementById('root')
        if(theme){
root.style.backgroundColor ="#fff";
root.style.color="black";
        }else{
            root.style.backgroundColor="black";
            root.style.color ="#fff"
        }
        setTheme(!theme)
        
    }
const {products} = useSelector((store)=> store.basket)

  return (
    <div id='header'>
       <Link className='flex-row' to='/'><img className='logo' src="./src/img/icon.jpg"  alt="" />
       <p className='logo-text'>World Shop</p> </Link>
      <div className='flex-row'>
        <input className='search-input' type="text" placeholder='Axtarış' />
        <div >
            { theme ?    <FaSun  onClick={ chnageTheme} className='icons' /> :<FaMoon onClick={chnageTheme} className='icons'/> }
            <Badge badgeContent={products.length} color="primary">
           <Link to={'/productsInBasket'}> <FaBasketShopping  className='icons'/></Link>
    </Badge>
       
        </div>
      </div>
    </div>
  )
}

export default Header

