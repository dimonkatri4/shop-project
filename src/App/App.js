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

productId = keys(this.state.productInCart);

addProductToCart = (productId, count) => {
	this.setState((prevState)=>({
		productInCart: {
			[productId]: prevState.productInCart[productId] + count
		}
	}))
}

// addProductToCart = (productId, count) => {
// 	this.setState((prevState)=>({
// 		productInCart: keys(this.state.productInCart).map((productId)=>(
// 			{productId:prevSatet.productInCart[productId]}
// 		))})
//   }
  




	render() {
		console.log(this.productId)
	return (
		<div>
			<Header
				productInCart= {this.state.productInCart}
			/>
			<button onClick={()=>this.addProductToCart(1,1)} >Test</button>
			<Main
				addProductToCart = {this.addProductToCart}
			/>
			<Footer/>
		</div>
	)
}
}

export default App
