import React from 'react'
import {keys} from 'lodash'
import productsData, {getProductsMap} from '../../App/Main/Products/productsData'



const CartTotal = ({
    productInCart,
    productsMap = getProductsMap(productsData)
}) => {
    return (
        <div>
            Total: {
                keys(productInCart).reduce((total,productId)=>
                total + (productsMap[productId].price * productInCart[productId]), 0 )
                }$
        </div>
    )
}

export default CartTotal