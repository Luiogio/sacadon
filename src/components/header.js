import React from 'react';
import './header.css';
import logo from '../assets/logo_header.png';
import shop from '../assets/shop.png';
export default Header;

function Header() {
    return (
        <header>
            <div className='header'>
                <a href="/"><img src={logo} alt="Sacadon Logo" className='logo_header' /></a>
                
                <nav>
                    <ul>
                        <li><h2><a href="/">Notre mission</a></h2></li>
                        <li><h2><a href="/about">Nos sacs</a></h2></li>
                        <li><h2><a href="/services">Impacts</a></h2></li>
                        <li><h2><a href="/contact">Contact</a></h2></li>
                        <li><h2><a href="/contact">Nous rejoindre</a></h2></li>
                    </ul>
                </nav>
                <img src={shop} alt="Sacadon Logo" className='shopping' />
            </div>
        </header>
    );
}
