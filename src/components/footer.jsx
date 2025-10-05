import { Link } from "react-router-dom";
import './footer.css';

import logo from '../assets/header_footer/logo_footer.png';
import linkedin from '../assets/header_footer/linkedin.png';
import insta from '../assets/header_footer/instagram.png';
import mail from '../assets/header_footer/mail.png';
import arrow from '../assets/header_footer/arrow_to_top.png';

export default function Footer() {
    // Fonction qui remonte en haut
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // défilement fluide
      });
    };

    return (
      <footer>
          <div className='logo_footer'>
            <img src={logo} alt="Sacadon Logo Footer"/>
            <div>
              SACADON Association
              @Copyright, Sacadon, 2025
            </div>
          </div>

          <div className='vertical_bar'></div>
              
          <nav className='nav_footer'>
              <ul>
                  <Link className='btn_footer'>Conditions générales de ventes</Link>
                  <Link className='btn_footer'>Conditions générales d’utilisations</Link>
                  <Link className='btn_footer'>Mentions légales</Link>
                  <Link className='btn_footer'>Politiques de confidentialité & cookies</Link>
                  <Link className='btn_footer'>FAQ</Link>

                  {/* <button className='btn_footer'>Conditions générales de ventes</button>
                  <button className='btn_footer'>Conditions générales d’utilisations</button>
                  <button className='btn_footer'>Mentions légales</button>
                  <button className='btn_footer'>Politiques de confidentialité & cookies</button>
                  <button className='btn_footer'>FAQ</button> */}
              </ul>
          </nav>

          <div className='vertical_bar'></div>

          <div className='media_sacadon'>
            <img src={linkedin} alt="Sacadon linkedin"/>
            <img src={insta} alt="Sacadon insta"/>
            <img src={mail} alt="Sacadon mail"/>
         </div>
        
        {/* Fleche pour remonter la page */}
        {/* <button className="scroll-top-btn" onClick={scrollToTop}> */}
            <img src={arrow} alt="Arrow to top" className="scroll-top-btn" onClick={scrollToTop}/>
        {/* </button> */}
      </footer>
    );
}
