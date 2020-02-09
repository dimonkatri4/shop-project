import React, {Component} from 'react'

import '../common/style/reset.css'
import '../common/style/base.css'
import {omit} from 'lodash'
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
			...prevState.productInCart, //spred operator
				[productId]: (prevState.productInCart[productId] || 0) + count

		}
	}))
}
removeProductFromCart = (productId) => {
	this.setState((prevState)=>({
		productInCart: omit(prevState.productInCart, productId)
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
				removeProductFromCart = {this.removeProductFromCart}
			/>
			<Footer/>
			
		</div>
		
	)
}
}


export default App
