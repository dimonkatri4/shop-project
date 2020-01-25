import React, {Component} from 'react'

import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import {keys} from "lodash"

class App extends Component {

	state = {
	productInCart: {
		1:5,
		2:10
	}
}

addProductToCart = (productId, count) => {
	this.setState((prevState)=>({
		productInCart: {
			productId: productId = keys(productInCart),
			count: 
		}

		// cartData: {
		// 	count: prevState.cartData.count + count,
		// 	price:prevState.cartData.price + (price*count)
		// }
		
	}))
  }
	render() {
	return (
		<div>
			<Header
				productInCart= {this.state.productInCart}
			/>
			<Main
				addProductToCart = {this.addProductToCart}
			/>
			<Footer/>
		</div>
	)
}
}

export default App
