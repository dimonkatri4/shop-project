import React from 'react'
import './cart.css'
import {keys} from "lodash"
import productsData from './../../Main/Products/productsData'
import {Link} from 'react-router-dom'

const productsMap = productsData.reduce((accObj, product)=>({
	...accObj,
	[product.id]:product
}),{})



const Cart = ({
	productInCart
}) => {
	console.log(keys(productInCart))
	return (
	<div className="cart text-center">
		{
			keys(productInCart).map((productId)=>(
				<div key={productId}>
					 {productsMap[productId].name}: {productInCart[productId]}: {(productsMap[productId].price * productInCart[productId])}$

					</div>
			)) 
		}
		Total: {
			keys(productInCart).reduce((total,productId)=>
			 total + (productsMap[productId].price * productInCart[productId]), 0 )
		}$
		<div><Link to="/cart">Show cart</Link></div>
	</div>		
	)
}

export default Cart