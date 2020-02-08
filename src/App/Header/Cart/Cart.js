import React from 'react'
import './cart.css'
import {Link} from 'react-router-dom'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'



const Cart = ({
	productInCart
}) => {
	return (
	<div className="cart text-center">
		<CartProductList
			productInCart={productInCart}
		/>
		<CartTotal
			productInCart={productInCart}
		/>
		<div><Link to="/cart">Show cart</Link></div>
	</div>		
	)
}

export default Cart