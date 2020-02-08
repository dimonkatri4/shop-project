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
		2:0,
	}
}

productId = keys(this.state.productInCart);

addProductToCart = (productId, count) => {
	this.setState((prevState)=>({
		productInCart: {
			...prevState.productInCart,
				[productId]: (prevState.productInCart[productId] || 0) + count

		}
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
				productInCart= {this.state.productInCart}
			/>
			<Footer/>
		</div>
	)
}
}


export default App
