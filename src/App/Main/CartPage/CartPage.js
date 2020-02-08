import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'


const CartPage = ({
    productInCart
}) => {
    return (
        <div>
            <h1 className="page-title">Cart page</h1>
            <div className="page-title"> 
                <CartProductList
                    productInCart={productInCart}
                />
                {/* {
                keys(productInCart).map((productId)=>(
                    <div key={productId}>
                        {productsMap[productId].name}: {productInCart[productId]} x {productsMap[productId].price}$ = {productsMap[productId].price *productInCart[productId]}$
                    </div>
                 )) 
                } */}
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