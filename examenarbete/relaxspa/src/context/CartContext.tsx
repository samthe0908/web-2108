import {createContext, ReactNode, useContext, useState} from "react";

type CartProviderProps = {
    children:ReactNode
}
type CartContext ={
    getItemQuantity: (id: number) => number
    decreaseCartQuantity: (id: number) => void
    increaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}
type CartItem = {
    id: number
    antal: number
}
const CartContext = createContext({} as CartContext)

export function useCart() {
    return useContext(CartContext)
}
export function CartProvider({children}:
CartProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.antal || 0
    }

    function increaseCartQuantity (id: number){
        setCartItems(currentItems =>{
            if ( currentItems.find(item => item.id === id) == null){
                return [...currentItems, {id, antal: 1}]
            }else {
                return currentItems.map(item => {
                    if (item.id === id){
                        return {...item, antal: item.antal +1}
                    }else {
                        return item
                    }
                })

            }
        })
    }

    function decreaseCartQuantity (id: number){
        setCartItems(currentItems =>{
            if ( currentItems.find(item => item.id === id)?.antal === 1){
                return currentItems.filter(item=> item.id !== id)
            }else {
                return currentItems.map(item => {
                    if (item.id === id){
                        return {...item, antal: item.antal -1}
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
            value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}
        >
            {children}
        </CartContext.Provider>
    )
    }
