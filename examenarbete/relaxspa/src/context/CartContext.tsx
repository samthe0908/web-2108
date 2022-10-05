import {createContext, ReactNode, useContext, useState} from "react";
import {Cart} from "../components/Cart";
import {useLocalStorage} from "../hooks/useLocalStorage";


type CartProviderProps = {
    children:ReactNode
}

type CartItem = {
    id: number
    quantity: number
}
type CartContextType ={
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    decreaseCartQuantity: (id: number) => void
    increaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQty: number
    cartItems: CartItem[]

}

const CartContext = createContext({} as CartContextType)

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({children}:
CartProviderProps){
    const [is0pen, setIs0pen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]
        >(
        "shopping-cart",
        [])

    const cartQty = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIs0pen(true)
    const closeCart = () => setIs0pen(false)

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity (id: number){
        setCartItems(currentItems =>{
            if ( currentItems.find(item => item.id === id) == null){
                return [...currentItems, {id, quantity: 1}]
            }else {
                return currentItems.map(item => {
                    if (item.id === id){
                        return {...item, quantity: item.quantity +1}
                    }else {
                        return item
                    }
                })

            }
        })
    }

    function decreaseCartQuantity (id: number){
        setCartItems(currentItems =>{
            if ( currentItems.find(item => item.id === id)?.quantity === 1){
                return currentItems.filter(item=> item.id !== id)
            }else {
                return currentItems.map(item => {
                    if (item.id === id){
                        return {...item, quantity: item.quantity -1}
                    }else {
                        return item
                    }
                })

            }
        })
    }

    function removeFromCart(id: number){
        setCartItems(currentItems => {
            return currentItems.filter(item=> item.id !== id)
        })
        }

    return(
        <CartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                cartQty,
                openCart,
                closeCart}}
        >
            {children}
            <Cart isOpen={is0pen}/>
        </CartContext.Provider>
    )
    }
