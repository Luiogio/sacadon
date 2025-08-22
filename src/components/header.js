import React from 'react';
import './header.css';
import logo from '../assets/logo_header.png';
import shop from '../assets/shop.png';
import menu from '../assets/menu.png';
export default Header;

function Header() {
    return (
        <header>
            <div className='header'>
                <a href="/"><img src={logo} alt="Sacadon Logo"/></a>
                
                <nav>
                    <ul>
                        <a href="/"><h2>Notre mission</h2></a>
                        <a href="/about"><h2>Nos sacs</h2></a>
                        <a href="/services"><h2>Impacts</h2></a>
                        <a href="/contact"><h2>Contact</h2></a>
                        <a href="/contact"><h2>Nous rejoindre</h2></a>
                    </ul>
                </nav>
            </div>
            <a href="/" className='shopping'><img src={shop} alt="Sacadon Shop"/></a>
            <a href="/" className='menu'><img src={menu} alt="Sacadon Menu"/></a>
        </header>
    );
}
