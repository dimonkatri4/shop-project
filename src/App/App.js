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
		2:2,
	},
	btnHead: {
		1:true,
		2:false
	}
}

productId = keys(this.state.productInCart);

changeButtonHead = () => {
	this.setState((prevState)=>({
		btnHead = 
	}))
}

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

changeProductCount = (productId,count) => {
	this.setState((prevState)=>({
		productInCart: {
			...prevState.productInCart,
				[productId]: count

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
				removeProductFromCart = {this.removeProductFromCart}
				changeProductCount = {this.changeProductCount}
			/>
			<Footer/>
			
		</div>
		
	)
}
}


export default App
