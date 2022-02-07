
import '../utils/global/css/Navbar.css'
import {Link} from "react-router-dom";
import Cart from './Cart';
import logo from '../img/mycat.jpg'
import CartPic from '../img/shopping-cart-2351.png'

export default function Navbar({cartItems, setCartItems}) {
    return (
            <nav className='Navbar'>
                <div>
                <img className='Logo' src={logo} alt="logo"/>
                </div>
                <div className='Nav-list '>
                <ul>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/products'>PRODUKTER</Link>
                    </li>
                    <li>
                        <Link to='/contact'>KONTAKT</Link>
                    </li>
                </ul>
                </div>
                <div className='ShopName'>
                    <h1 className='Text'> ALL FOR CATS </h1>
                        <Link to='/'>
                            <img className='CartPic' src={CartPic} alt="cartPic"/>
                    </Link>
                </div>
                <Cart cartItems={cartItems} setCartItems={setCartItems} />

         </nav>
    )
}