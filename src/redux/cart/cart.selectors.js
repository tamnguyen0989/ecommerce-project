import { createSelector } from 'reselect'

const selectedCart = state => state.cart

export const selectedToogleCart = createSelector(
    [selectedCart],
    cart => cart.hidden
)

export const selectedCartItems = createSelector(
    [selectedCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectedCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity
        , 0)
)