import React from "react";
import '../../utils/global/css/products.css'

const Products = ({cartItems, productItems, setCartItems}) => {
    console.log(cartItems);

    const updateCart = (productItem) => {
        const itemExist = cartItems.find(cartItem => cartItem.id == productItem.id);

        if (itemExist) {
            const copy = [...cartItems];
            const itemToUpdate = copy.find(copyItem => copyItem.id == productItem.id);
            itemToUpdate.quantity += 1;
            setCartItems(copy);
        }
        else {
            const newCartItem = {...productItem}
            newCartItem.quantity = 1;

            setCartItems([...cartItems, newCartItem])
        }
    };

    return(
        <div className='Products'>
            {productItems.map((productItem)=>(
                <div className='Card' key={productItem.id}>
                    <div className='ProductImage'>
                        {productItem.image}
                    </div>
                    <div>
                        <h3 className='ProductName'>{productItem.name}</h3>
                    </div>
                    <div className='ProductPrice'>
                        {productItem.price} Kr
                    </div>
                    <button className='AddProduct' onClick={() => {updateCart(productItem)}}>KÖP</button>

                </div>

                ))}
        </div>
    )

}

export default Products;