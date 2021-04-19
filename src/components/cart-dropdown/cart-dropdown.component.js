import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectedCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartItems, history }) => {
    console.log('CartDropdown called')
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton onClick={()=> history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
);}

const mapStateToProps = (state) => ({
    cartItems: selectedCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));