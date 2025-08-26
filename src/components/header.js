import './header.css';
import logo from '../assets/logo_header.png';
import shop from '../assets/shop.png';
import menu from '../assets/menu.png';

export default function Header({onShowSecond}) {
    return (
        <header>
            <div className='header'>
                <button href="/"><img src={logo} alt="Sacadon Logo"/></button>
                
                <nav className='nav_header'>
                    <ul>
                        <button href="/">Notre mission</button>
                        <button href="/about">Nos sacs</button>
                        <button href="/services">Impacts</button>
                        <button href="/contact">Contact</button>
                        <button href="/contact">Nous rejoindre</button>
                    </ul>
                </nav>
            </div>
            <button href="/" className='shopping'><img src={shop} alt="Sacadon Shop"/></button>
            <button onClick={onShowSecond} className='menu'><img src={menu} alt="Sacadon Menu"/></button>
        </header>
    );
}
