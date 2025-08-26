import { useState } from "react";
import './menu_responsive.css';
import bottom_arrow from '../assets/bottom_arrow.png';

export default function MenuResponsive({activeMenu}) {
  const [moved, setMoved] = useState(false);
  const [angle, setAngle] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault(); // empêche le comportement par défaut du <a>
    setMoved(!moved);

    setAngle(prev => prev + 180); // ajoute 180° à chaque clic
  };

  return (
        <div className={`menu_resp ${activeMenu ? "down" : ""}`}>
            <nav>
                <ul>
                    <button href="/" className='menu_resp_'>Notre mission</button>
                    <button href="/about" className='menu_resp_'>Nos sacs</button>
                    <button href="/services" onClick={handleClick} className='impact_menu_resp'>
                        <div>Impacts </div>
                        <img 
                            className={`img_rotated ${moved ? "down" : ""}`} 
                            style={{transform: `rotate(${angle}deg)`}}
                            src={bottom_arrow} alt="bottom arrow"
                        />
                    </button>

                    <div className={`select_impact ${moved ? "down" : ""}`}>
                        <button href="/" className='impact_menu'>Ecologique</button>
                        <button href="/" className='impact_menu'>Humanitaire</button>
                        <button href="/" className='impact_menu'>Informations & pédagogie</button>
                    </div>
                    
                    <button href="/contact" className={`down_menu ${moved ? "down" : ""}`}>Contact</button>
                    <button href="/contact" className={`down_menu ${moved ? "down" : ""}`}>Nous rejoindre</button>
                    <button href="/contact" className={`shop_menu ${moved ? "down" : ""}`}>Panier</button>
                </ul>
            </nav>
        </div>
    );
}

