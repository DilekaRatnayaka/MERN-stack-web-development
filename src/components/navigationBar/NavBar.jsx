import React, { useState } from 'react'
import Logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import './NavBar.css';
import MenuIcon from '@mui/icons-material/Menu';


function NavBar() {

    const[openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

  return (
    <div className = "navBar">
        <div className = "leftSide" id = {openLinks? "open" : "close"}>
            <img src = {Logo} alt = "logo"/>
            <div className = "hiddenLinks">
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/shop">Shop</Link>
                <Link to = "/workshops">Workshops</Link>
                <Link to = "/contact">Contact</Link>
                <Link to = "/login">Login</Link>
            </div>
        </div>
        <div className = "rightSide">

            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/shop">Shop</Link>
            <Link to = "/workshops">Workshops</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/login">Login</Link>
            <button onClick = {toggleNavbar}>
                <MenuIcon/>
            </button>

        </div>
    </div>
  )
}

export default NavBar
