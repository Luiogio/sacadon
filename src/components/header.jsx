import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import "./header.css";

import logo from "../assets/header_footer/logo_header.png";
import shop from "../assets/header_footer/shop.png";
import menu from "../assets/header_footer/menu.png";

export default function Header({onShowSecond}) {
  const [open, setOpen] = useState(false);

  return (
    <header>
        <div className="header">
            <div className="logo_header"><img src={logo} alt="Sacadon Logo"/></div>
                
            <nav className="nav_header">
                <ul>
                    <Link to="/" className="btn_header">Notre mission</Link>
                    <Link to="/nos-sacs" className="btn_header">Nos sacs</Link>
                    
                    {/* MENU DEROULANT */}
                    <div
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    >
                    <Link to="/impacts" className="btn_header impact">Impacts</Link>
                    <nav className={`dropdown-menu ${open ? "open" : ""}`}>
                        <ul>
                            <Link to="/impact-ecologique" className="btn_nav_impact">Ecologique</Link>
                            <Link to="/impact-humanitaire" className="btn_nav_impact">Humanitaire</Link>
                            <Link to="/information-pedagogie" className="btn_nav_impact">Informations & pédagogie</Link>
                        </ul>
                    </nav>
                    </div>
                    {/* ---------------- */}

                    <Link to="/contact" className="btn_header">Contact</Link>
                    <Link to="/nous-rejoindre" className="btn_header">Nous rejoindre</Link>
                </ul>
            </nav>
        </div>
        
        <img src={shop} alt="Sacadon Shop" className="shopping"/>
    </header>
  );
}
