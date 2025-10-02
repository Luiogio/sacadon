import './footer.css';

import logo from '../../assets/home_page/logo_footer.png';
import linkedin from '../../assets/home_page/linkedin.png';
import insta from '../../assets/home_page/instagram.png';
import mail from '../../assets/home_page/mail.png';
import arrow from '../../assets/home_page/arrow_to_top.png';

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
                  <button>Conditions générales de ventes</button>
                  <button>Conditions générales d’utilisations</button>
                  <button>Mentions légales</button>
                  <button>Politiques de confidentialité & cookies</button>
                  <button>FAQ</button>
              </ul>
          </nav>

          <div className='vertical_bar'></div>

          <div className='media_sacadon'>
            <img src={linkedin} alt="Sacadon linkedin"/>
            <img src={insta} alt="Sacadon insta"/>
            <img src={mail} alt="Sacadon mail"/>
         </div>
        
        {/* Fleche pour remonter la page */}
        <button className="scroll-top-btn" onClick={scrollToTop}>
            <img src={arrow} alt="Arrow to top"/>
        </button>
      </footer>
    );
}
