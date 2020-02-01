import React from 'react'
import './cart.css'
import {keys} from "lodash"
import productsData from './../../Main/Products/productsData'

const productsMap = productsData.reduce((accObj, product)=>({
	...accObj,
	[product.id]:product
}),{})



const Cart = ({
	productInCart
}) => {
	
	return (
	<div className="cart text-center">
		{
			keys(productInCart).map((productId)=>(
				<div key={productId}>
					 {productsMap[productId].name}: {productInCart[productId]}
					</div>
			)) 
		}
		Total: 0$
	</div>		
	)
}

export default Cart