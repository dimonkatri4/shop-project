import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'

class ProductListItem extends Component {

    state = {
            productsCount:1
        }

    render() {
        return(
            <div className="product-list-item">
                <div className="product-image">
                    <img src={this.props.image} alt={this.props.name} title={this.props.name}/>
                </div>
                <div className="product-title">{this.props.name}</div>
                <div className="product-description">{this.props.description}</div>
                <div className="product-features">Type: {this.props.type}</div>
                <div className="product-features">Capacity: {this.props.capacity}</div>
                <div className="product-quantity">
                    <button>-</button>
                    <input type="text" value = {this.state.productsCount} readOnly={true}></input>
                    <button>+</button>
                </div>
                <div className="product-price">Price: {this.props.price}</div>
                <button className="btn btn-add-to-cart"> Add to cart</button>
            </div>  
        )
    }
}


ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    capacity: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string
}

ProductListItem.defaultProps = {
    description: "No description ...",
}

export default ProductListItem