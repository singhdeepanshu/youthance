import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../images/logo.png';
import '../pages/styles.css';
import FindWorker from '../pages/FindWorker';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    // toggler = () =>{
    //   toggle ? settoggle(false) :settoggle(true)
    // }
    return (
        <div className="fixer">
            <nav className="navbar">
                <div className="youth">
                    <Link to="./">
                        <img height="40%" width="40%" alt="logo" src={logo}></img>
                    </Link>
                </div>
                <ul className="nav-links"
                    style={{ transform: open ? "translateX(0px)" : "" }}>
                    {/* <li className="find">Find Workers</li> */}
                    <Link className="navLink" style={{ textDecoration: 'none', color: '#29364A' }} to="findWorker" > <li>Find Workers</li></Link>
                    <Link className="navLink" style={{ textDecoration: 'none', color: '#29364A' }} to="find-work" > <li>Find Work</li></Link>
                    <Link className="navLink" style={{ textDecoration: 'none', color: '#29364A' }} to="about" > <li>About Us</li></Link>
                    <Link className="navLink" to="" style={{ textDecoration: 'none', color: '#29364A' }} to="/post-a-gig">  
                        <button className="youthButton" > 
                                POST A GIG 
                        <hr className="youth_button_line_or flex"></hr>
                        
                        </button>
                    </Link>
     
                </ul>
                <h1 onClick={() => setOpen(!open)} className="ham"><GiHamburgerMenu /></h1>
            </nav>
        </div>
    )
}

