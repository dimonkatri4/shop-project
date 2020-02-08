import React from 'react'
import productsData, { getProductsMap } from '../../App/Main/Products/productsData'
import {keys} from 'lodash'

const CartProductList = ({
    productInCart,
    productsMap = getProductsMap(productsData)
    }) => {
    return (
        keys(productInCart).map((productId)=>(
            <div key={productId}>
                 {productsMap[productId].name}: {productInCart[productId]}
            </div>
        )) 
    )
}

export default CartProductList