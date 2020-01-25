import React, { Component } from 'react'
import './cart.css'


const Cart = ({
	productInCart
}) => {
	console.log(productInCart)
	return (
	<div className="cart text-center">
		<div className="products-count">{productInCart[2]}</div>
		<div className="products-price">${}</div>
	</div>		
	)
}

export default Cart