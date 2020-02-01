import React from 'react'
import './cart.css'
import {keys} from "lodash"
import productsData from './../../Main/Products/productsData'

// const productsMap = productsData.reduce((accObj, product)=>({
// 	...accObj,
// 	[product.id]:product
// }),{})



const Cart = ({
	productInCart
}) => {
	
	return (
	<div className="cart text-center">
		{
			keys(productInCart).map((productId)=>(
				<div key={productId}>
					 {productsData[productId-1].name}: {productInCart[productId]}
					</div>
			)) 

		}
	</div>		
	)
}

export default Cart