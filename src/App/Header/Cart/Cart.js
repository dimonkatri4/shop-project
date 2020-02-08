import React from 'react'
import './cart.css'
import {keys} from "lodash"
import productsData,{getProductsMap} from './../../Main/Products/productsData'
import {Link} from 'react-router-dom'
import CartTotal from '../../../Components/Cart/CartTotal'



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
		<CartTotal
			productInCart={productInCart}
		/>
		<div><Link to="/cart">Show cart</Link></div>
	</div>		
	)
}

export default Cart