
import '../utils/global/css/Navbar.css'
import logo from '../img/mycat.jpg'

export default function Navbar() {
    return (
            <nav className='Navbar'>
                <img className='Logo' src={logo} alt="logo"/>
                <ul className='Nav-item'>
                <li className='Nav-list'>HOME</li>
                <li className='Nav-list'>FODER</li>
                <li className='Nav-list'>ÖVRIG</li>
                <li className='Nav-list'>KONTAKT</li>

            </ul>
        </nav>
    )
}