import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'

const CartPage = ({
    productInCart,
    removeProductFromCart,
    changeProductCount
}) => {
    return (
        <div>
            <h1 className="page-title">Cart page</h1>
            <div> 
                <CartProductList
                    productInCart={productInCart}
                    CartList={CartProductListItemExtended}
                    removeProductFromCart = {removeProductFromCart}
                    changeProductCount = {changeProductCount}
                />
            </div>
            <div className="page-title">
                <CartTotal
                    productInCart = {productInCart}
                />
            </div>

               
        </div>
    )
}

export default CartPage