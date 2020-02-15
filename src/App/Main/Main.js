import React from 'react'
import ProductsList from './Products/ProductsList'
import { Route } from 'react-router-dom'
import CartPage from './CartPage/CartPage'
import ShippingPage from './ShippingPage/ShippingPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ProductPage from './ProductPage/ProductPage'

const Main =({
			addProductToCart,
			productInCart,
			removeProductFromCart,
			changeProductCount,
		}) => {
	return (
			<main className="main">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							Filter
						</div>
						<div className="col-lg-9">
							<Route exact path="/" render={()=>(
								<ProductsList
									addProductToCart = {addProductToCart}
									/>
							)} />
							<Route path="/cart" render={()=>(
								<CartPage
								productInCart = {productInCart}
								removeProductFromCart = {removeProductFromCart}
								changeProductCount = {changeProductCount}
								/>
							)}/>
							<Route path="/payment" component={PaymentPage}/>
							<Route path="/shipping" component={ShippingPage} />
							<Route path="/products/:productId" component={ProductPage}/>
						</div>
						
					</div>
				</div>
			</main>
	)
}

export default Main