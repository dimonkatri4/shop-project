import React from 'react'
import './cart.css'

const Cart = ({cartData}) => {
	return (
	<div className="cart text-center">
		<div className="products-count">{cartData.count}</div>
	<div className="products-price">${cartData.price}</div>
	</div>		
	)
}

export default Cart