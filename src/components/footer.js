import './footer.css';
import logo from '../assets/logo_footer.png';
import linkedin from '../assets/linkedin.png';
import insta from '../assets/instagram.png';
import mail from '../assets/mail.png';

export default function Footer() {

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
      </footer>
    );
}
