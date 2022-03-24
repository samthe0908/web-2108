import '../utils/global/css/cart.css'

const Cart = ({cartItems, setCartItems,}) => {
    const onIncrease = (itemId) => {
        const copy = [...cartItems];
        const itemToUpdate = copy.find(copyItem => copyItem.id == itemId);
        itemToUpdate.quantity += 1;
        setCartItems(copy);
    };

    const onDecrease = (itemId) => {
            const copy = [...cartItems];
            const itemToUpdate = copy.find(copyItem => copyItem.id == itemId);
            if(itemToUpdate.quantity === 1){
                setCartItems(copy.filter((copyItem) => copyItem.id !== itemId));
            }
            else {
                itemToUpdate.quantity -= 1;
                setCartItems(copy);
            }

    };

    const onDelete = (itemId) => {
        const newItems = cartItems.filter(cartItem => cartItem.id != itemId);
        setCartItems(newItems);
    }
    const totalSum = cartItems.reduce(
        (price, cartItem)=> price + cartItem.quantity * cartItem.price,0
    );

    const clearCart = () => {
        setCartItems([]);

    }

    return (
        <div className='Cart-container'>
            <div className='Cart-item-header'> Din varukorg </div>
            <div className='FreeShipping'> Fri frakt över 259 kr </div>
            <div className='Clear-cart'>
                {cartItems.length >=1&&(
                    <button className='Clear-cart-button' onClick={clearCart}> Töm varukorg</button>
                )}
            </div>

            {cartItems.length === 0&& (
            <div className='Cart-item-empty'> Din varukorg är tom </div>
            )}

            <div>
                {cartItems.map(cartItem =>
                    <div className='ItemInCart'>
                        <div className='Cart-item-image'>{cartItem.image} </div>
                        <div className='Cart-item-name'>{cartItem.name} </div>
                        <div className='Cart-item-price'>Pris: {cartItem.price} </div>
                        <div className='Cart-item-qnt'>Antal: {cartItem.quantity}</div>

                        <button className='BtnInCart' onClick={() => onIncrease(cartItem.id)}>+</button>
                        <button className='BtnInCart' onClick={() => onDecrease(cartItem.id)}>-</button>
                        <button className='BtnInCart' onClick={() => onDelete(cartItem.id)}>x</button>
                        <div className='Cart-item-totalPrice'>Total pris: {cartItem.price * cartItem.quantity} kr</div>
                    </div>)}
            </div>
            <div className='TotalPrice'> Summan:  {totalSum} Kr</div>


            <span> {cartItems.length ===0? "":
                totalSum < 259 &&
                <div className='ToFreeShipping'>du har {259-totalSum} kr kvar till fri frakt</div> }
            </span>
            {totalSum>= 259 && <div className='GotFreeShipping'> Du har fri frakt  </div>}
        </div>);
}

export default Cart;
