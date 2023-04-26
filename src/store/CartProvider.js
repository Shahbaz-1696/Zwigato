import CartContext from "./CartContext";

const CartProvider = (props) => {
    const addItemstoCart = {}
    const removeItemsFromCart = {}
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemstoCart,
        removeItem: removeItemsFromCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;