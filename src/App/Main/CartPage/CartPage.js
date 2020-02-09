import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'

const CartPage = ({
    productInCart
}) => {
    return (
        <div>
            <h1 className="page-title">Cart page</h1>
            <div className="page-title"> 
                <CartProductList
                    productInCart={productInCart}
                    CartList={CartProductListItemExtended}
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