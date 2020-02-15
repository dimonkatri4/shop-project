import React from 'react'
import productsData, { getProductsMap } from '../../App/Main/Products/productsData'
import {keys} from 'lodash'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productInCart,
    productsMap = getProductsMap(productsData),
    CartList = CartProductListItem,
    removeProductFromCart,
    changeProductCount
    }) => {
    return (
        keys(productInCart).map((productId)=>(
            <CartList
                product = {productsMap[productId]}
                productCount = {productInCart[productId]}
                key = {productId}
                removeProductFromCart={removeProductFromCart}
                changeProductCount = {changeProductCount}
            />
        )) 
    )
}

export default CartProductList