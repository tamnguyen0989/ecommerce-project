import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectedCartItems } from '../../redux/cart/cart.selectors'
import { toogleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length
                        ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick=
                {() => {
                    dispatch(toogleCartHidden())
                    history.push('/checkout')
                }}>
                CHECKOUT
            </CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectedCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));