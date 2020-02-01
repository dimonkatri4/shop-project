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
		1:0,
		2:0,
		3:0,
		4:0,
		5:0
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
		console.log(this.productId)
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
