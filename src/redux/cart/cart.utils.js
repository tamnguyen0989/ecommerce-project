export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    if (existCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === existCartItem.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToAdd) => {
    const existCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    if (existCartItem.quantity === 1)
        return cartItems.filter(cartItem => cartItem.id !== existCartItem.id)

    return cartItems.map(cartItem =>
        cartItem.id === existCartItem.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}