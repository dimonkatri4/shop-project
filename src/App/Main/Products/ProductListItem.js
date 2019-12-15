import React from 'react'
import './ProductListItem.css'

const ProductListItem = () => {
    return(
        <div className="product-list-item">
            <div className="product-title">Iphone X</div>
            <div className="product-description">This is Iphone X</div>
            <div className="product-features">Type: phone</div>
            <div className="product-features">Capacity: 64Gb</div>
            <div className="product-price">Price: 500$</div>
            <button className="btn btn-add-to-cart"> Add to cart</button>
        </div>       
    )
}

export default ProductListItem