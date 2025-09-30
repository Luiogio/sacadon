import { useState } from "react";
import './menu_responsive.css';
import bottom_arrow from '../assets/bottom_arrow.png';

export default function MenuResponsive({activeMenu}) {
  const [moved, setMoved] = useState(false);
  const [angle, setAngle] = useState(false);
  
  const handleClick = () => {
    setMoved(!moved);
    setAngle(prev => prev + 180); // ajoute 180° à chaque clic
  };

  return (
        <div className={`menu_resp ${activeMenu ? "down" : ""}`}>
            <nav>
                <ul>
                    <button className='menu_resp_'>Notre mission</button>
                    <button className='menu_resp_'>Nos sacs</button>
                    <button onClick={handleClick} className='impact_menu_resp'>
                        <div>Impacts </div>
                        <img 
                            className={`img_rotated ${moved ? "down" : ""}`} 
                            style={{transform: `rotate(${angle}deg)`}}
                            src={bottom_arrow} alt="bottom arrow"
                        />
                    </button>

                    <div className={`select_impact ${moved ? "down" : ""}`}>
                        <button className='impact_menu'>Ecologique</button>
                        <button className='impact_menu'>Humanitaire</button>
                        <button className='impact_menu'>Informations & pédagogie</button>
                    </div>
                    
                    <button className={`down_menu ${moved ? "down" : ""}`}>Contact</button>
                    <button className={`down_menu ${moved ? "down" : ""}`}>Nous rejoindre</button>
                    <button className={`shop_menu ${moved ? "down" : ""}`}>Panier</button>
                </ul>
            </nav>
        </div>
    );
}

