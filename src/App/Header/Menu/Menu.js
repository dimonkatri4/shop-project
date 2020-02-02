import React from 'react'
import './menu.css'
import { Link, Route } from 'react-router-dom'


const Menu = () => {
	return (
		<div className="menu">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/">Products</a></li>
			<li><Link to="/payment" >Payment</Link></li>
			<li><Link to="/shipping" >Shipping</Link></li>
		</ul>
	</div>
	)
}

export default Menu