import React, {Component} from 'react'

import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
state = {
	cartDate: {
		count: 0,
		price:0,
	}
}

	render() {
	return (
		<div>
			<Header/>
			<Main/>
			<Footer/>
		</div>
	)
}
}

export default App
