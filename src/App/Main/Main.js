import React from 'react'
import ProductsList from './Products/ProductsList'
import { Route } from 'react-router-dom'
import CartPage from './CartPage/CartPage'
import ShippingPage from './ShippingPage/ShippingPage'
import PaymentPage from './PaymentPage/PaymentPage'

const Main =({
			addProductToCart,
			productInCart,
			removeProductFromCart
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
								/>
							)}/>
							<Route path="/payment" component={PaymentPage}/>
							<Route path="/shipping" component={ShippingPage} />
						</div>
						
					</div>
				</div>
			</main>
	)
}

export default Main