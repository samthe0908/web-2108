
import '../utils/global/css/Navbar.css'
import {Link} from "react-router-dom";
// import Cart from './Cart';
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
                        <Link to='/'>HEM</Link>
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
                        <Link to='/cart' className='Cart'>
                            <img className='CartPic' src={CartPic} alt="cartPic"/>
                            <span className='Cart-length'>
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                    </Link>
                </div>
                {/*<Cart cartItems={cartItems} setCartItems={setCartItems} />*/}

         </nav>
    )
}