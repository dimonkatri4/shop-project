import React from 'react'
import './cart.css'
import {keys} from "lodash"
import productsData,{getProductsMap} from './../../Main/Products/productsData'
import {Link} from 'react-router-dom'



const Cart = ({
	productInCart,
	productsMap = getProductsMap(productsData),
}) => {
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