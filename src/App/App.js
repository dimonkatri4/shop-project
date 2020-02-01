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
		3:10
	}
}

addProductToCart = (productId, count) => {
	this.setState((prevState)=>({
		productInCart: {
			productId: keys(this.state.productInCart),
			count: prevState.productInCart[productId] + 1
		} 
	}))
  }
  
	render() {
		console.log(keys(this.state.productInCart))
	return (
		<div>
			<Header
				productInCart= {this.state.productInCart}
			/>
			<button onClick={()=>this.addProductToCart(1,1)}>TEst</button>
			<Main
				addProductToCart = {this.addProductToCart}
			/>
			<Footer/>
		</div>
	)
}
}


export default App
