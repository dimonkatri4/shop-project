import React from 'react'
import productsData from '../Products/productsData'
import {keys} from 'lodash'

const productsMap = productsData.reduce((accObj, product)=>({
	...accObj,
	[product.id]:product
}),{})

console.log(productsMap)

const CartPage = ({productInCart}) => {
    return (
        <div>
            <h1 className="page-title">Cart page</h1>
            <div>
            {
			keys(productInCart).map((productId)=>(
				<div key={productId}>
					 {productsMap[productId].name}: {productInCart[productId]}: {productsMap[productId].price}$

					</div>
			)) 
		}
            </div>
        </div>
    )
}

export default CartPage