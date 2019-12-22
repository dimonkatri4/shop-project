import React from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image
}) => {
    return(
        <div className="product-list-item">
            <div className="product-image">
                <img src={image} alt={name} title={name}/>
            </div>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity}</div>
            <div className="product-price">Price: {price}</div>
            <button className="btn btn-add-to-cart"> Add to cart</button>
        </div>       
    )
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