import { useState, useEffect, useRef } from "react";
import './header.css';
import logo from '../assets/logo_header.png';
import shop from '../assets/shop.png';
import menu from '../assets/menu.png';

export default function Header({onShowSecond}) {
  const [moved, setMoved] = useState(false);
  const impactEvent = useRef(null);

  const clickImpact = () => {
    setMoved(!moved);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (impactEvent.current && !impactEvent.current.contains(event.target)) {
        setMoved(false);
      }
    };
    
    if (moved) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      // nettoyage
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [moved]);
  
    return (
        <header>
            <div className='header'>
                <button href="/"><img src={logo} alt="Sacadon Logo"/></button>
                    
                    <nav className='nav_header'>
                        <ul>
                            <button href="/">Notre mission</button>
                            <button href="/about">Nos sacs</button>
                            <button onClick={clickImpact}>Impacts</button>
                            <button href="/contact">Contact</button>
                            <button href="/contact">Nous rejoindre</button>
                        </ul>
                    </nav>

                </div>
                
                <nav ref={impactEvent} className={`nav_impact ${moved ? "down" : ""}`}>
                    <ul>
                        <button href="/" className=''>Ecologique</button>
                        <button href="/" className=''>Humanitaire</button>
                        <button href="/" className=''>Informations & pédagogie</button>
                    </ul>
                </nav>
            <button href="/" className='shopping'><img src={shop} alt="Sacadon Shop"/></button>
            <button onClick={onShowSecond} className='menu'><img src={menu} alt="Sacadon Menu"/></button>
        </header>
    );
}
