
const Cart = ({cartItems, setCartItems}) => {
    const onIncrease = (itemId) => {
        const copy = [...cartItems];
        const itemToUpdate = copy.find(copyItem => copyItem.id == itemId);
        itemToUpdate.quantity += 1;
        setCartItems(copy);
    };

    const onDecrease = (itemId) => {
        const copy = [...cartItems];
        const itemToUpdate = copy.find(copyItem => copyItem.id == itemId);
        itemToUpdate.quantity -= 1;
        setCartItems(copy);
    };

    const onDelete = (itemId) => {
        const newItems = cartItems.filter(cartItem => cartItem.id != itemId);
        setCartItems(newItems);
    }

    return (<div style={{ color: 'red'}}>Cart
        {cartItems.map(cartItem =>
            <div>
                name:{cartItem.name} price:{cartItem.price * cartItem.quantity} quantity:{cartItem.quantity}
                <button onClick={() => onIncrease(cartItem.id)}>+</button>
                <button onClick={() => onDecrease(cartItem.id)}>-</button>
                <button onClick={() => onDelete(cartItem.id)}>x</button>
            </div>)}
    </div>);
}

export default Cart;
