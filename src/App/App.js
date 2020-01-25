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
<<<<<<< HEAD
}

=======
  }
>>>>>>> b97a78d77fbbca8584a83b8ec5484ad5d162a4b7
	render() {
	return (
		<div>
			<Header
				productInCart= {this.state.productInCart}
			/>
			<Main
				addProductToCart = {this.addProductToCart}
			/>
<<<<<<< HEAD
			<button onClick={()=>this.addProductToCart(1,1)}>Add to cart</button>
			<Main
				addProductToCart = {this.addProductToCart}
			/>
=======
>>>>>>> b97a78d77fbbca8584a83b8ec5484ad5d162a4b7
			<Footer/>
		</div>
	)
}
}


export default App
