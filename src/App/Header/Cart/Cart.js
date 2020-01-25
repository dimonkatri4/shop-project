import React from 'react'
import './cart.css'
import {keys} from "lodash"


const Cart = ({
	productInCart
}) => {
	
	console.log(keys(productInCart))
	return (
	<div className="cart text-center">
		{
			keys(productInCart).map((productId)=>(
				<div key={productId}>{productId}:{productInCart[productId]}</div>
			)) 

		}
	</div>		
	)
}

export default Cart