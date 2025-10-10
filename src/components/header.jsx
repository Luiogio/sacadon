import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import "./header.css";

import logo from "../assets/header_footer/logo_header.png";
import shop from "../assets/header_footer/shop.png";
import menu from "../assets/header_footer/menu.png";

export default function Header({onShowSecond}) {

  const [moved, setMoved] = useState(false);
  const impactEvent = useRef(null);
  const impactButton = useRef(null);

  const clickImpact = () => {
    setMoved(!moved);
  };
  
  // Menu déroulant Menu Impact
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (impactEvent.current && !impactEvent.current.contains(event.target)
            && impactButton.current && !impactButton.current.contains(event.target)) {
        setMoved(false);
      }
    };
    
    if (moved) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      // Nettoyage
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [moved]);
  
    return (
        <header>
            <div className="header">
                <div className="logo_header"><img src={logo} alt="Sacadon Logo"/></div>
                    
                    <nav className="nav_header">
                        <ul>
                            <Link to="/" className="btn_header">Notre mission</Link>
                            <Link to="/nos-sacs" className="btn_header">Nos sacs</Link>
                            <Link className="btn_header" onClick={clickImpact} ref={impactButton}>
                              Impacts
                            </Link>
                            <Link className="btn_header">Contact</Link>
                            <Link className="btn_header">Nous rejoindre</Link>
                        </ul>
                    </nav>

            </div>
            
            {/* Menu Impacts */}
            <nav ref={impactEvent} className={`nav_impact ${moved ? "down" : ""}`}>
                <ul>
                    <Link className="btn_nav_impact">Ecologique</Link>
                    <Link className="btn_nav_impact">Humanitaire</Link>
                    <Link className="btn_nav_impact">Informations & pédagogie</Link>

                    {/* <button className="btn_nav_impact">Ecologique</button>
                    <button className="btn_nav_impact">Humanitaire</button>
                    <button className="btn_nav_impact">Informations & pédagogie</button> */}
                </ul>
            </nav>

            {/* <button className="shopping"> */}
              <img src={shop} alt="Sacadon Shop" className="shopping"/>
            {/* </button> */}

            {/* <button onClick={onShowSecond} className="menu"> */}
              <img src={menu} alt="Sacadon Menu" onClick={onShowSecond} className="menu"/>
              {/* </button> */}
        </header>
    );
}
