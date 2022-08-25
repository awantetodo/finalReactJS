import React, {useContext} from 'react';
import './navBar.css';
import {CartWidget} from '../CartWidget/CartWidget';
import {BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom';
import { CartContext } from '../Context/CartContext'; 

const logo = require('./navBarImages/index.jpg');

function NavBar() {

    const showCategories = () => {
    
        const categoriesBox = document.querySelector('.categoriesBox');

        if(categoriesBox.style.display === 'none'){
            categoriesBox.style.display='block';
        }else if(categoriesBox.style.display === 'block'){
            categoriesBox.style.display='none';
        }

    }

    return(

        <nav className='navBar'>
            
            <Link to='/'>
                <div><img className='navLogo' src={logo}/></div>
            </Link>

            <NavLink to='/' className='navButton' activeclassname='active'>Inicio</NavLink>

            <NavLink to='/category/Drinks' className='navButton' activeclassname='active'>Drinks </NavLink>

            <NavLink to='/category/Ahumados' className='navButton' activeclassname='active'>Ahumados</NavLink>
            
            <NavLink to='/Cart' activeclassname='active'>
                <CartWidget count={0}/>
            </NavLink>
        
        </nav>

    )

}

export default NavBar;