import React from 'react'
import productsData from '../Products/productsData'
import {keys} from 'lodash'

const productsMap = productsData.reduce((accObj, product)=>({
	...accObj,
	[product.id]:product
}),{})



const CartPage = ({productInCart}) => {
    return (
        <div>
            <h1 className="page-title">Cart page</h1>
            <div className="page-title"> 
                {
                keys(productInCart).map((productId)=>(
                    <div key={productId}>
                        {productsMap[productId].name}: {productInCart[productId]} x {productsMap[productId].price}$ = {productsMap[productId].price *productInCart[productId]}$
                    </div>
                 )) 
                }
            </div>
            <div className="page-title">
                Total: {
                keys(productInCart).reduce((total,productId)=>
                    total + (productsMap[productId].price * productInCart[productId]), 0 )
                }$
            </div>
        </div>
    )
}

export default CartPage