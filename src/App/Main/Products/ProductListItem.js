import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'
import {Link} from 'react-router-dom'
import Quantity from '../../../Components/Quantity/Quantity'
import {connect} from 'react-redux'

class ProductListItem extends Component {

    state = {
        productsCount:1,
    }
    
    onIncrementClick = () => {
        this.setState((prevState)=>({
            productsCount:prevState.productsCount + 1
        }))
    }
    onDecrementClick = () => {
        this.setState((prevState)=>({
            productsCount:prevState.productsCount - 1
        }))
    }

    renderLike = () => {
        const {
            id,
            isLiked,
            addLike,
            removeLike
        } = this.props;

        if(isLiked) {
            removeLike(id)
        } else {
            addLike(id)
        }
    }
    
    render() {
        const {
            id,
            name,
            description,
            type,
            capacity,
            price,
            image,
            addProductToCart,
            isLiked = false,
        } = this.props;
        return(
            <div className="product-list-item">
                <div className="product-image">
                    <img src={image} alt={name} title={name}/>
                </div>
                <button onClick={()=>this.renderLike()}>
                    {isLiked ? <span>&#128151;</span> : <span>&#128156;</span> }
                </button>
                <div className="product-title">
                    <Link to={`/products/${id}`}>{name}</Link> 
                </div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}</div>
                <Quantity
                    productsCount = {this.state.productsCount}
                    onDecrementClick = {this.onDecrementClick}
                    onIncrementClick = {this.onIncrementClick}
                    minCount = {1}
                />
                <div className="product-price">Price: {price}</div>
                <button 
                    className="btn btn-add-to-cart" 
                    onClick={()=>addProductToCart(id, this.state.productsCount)}> 
                    Add to cart</button>
            </div>  
        )
    }
}


ProductListItem.propTypes = {
    id: PropTypes.number,
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

const mapStateToProps = (state,props) => ({
    isLiked:state[props.id]
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id)=>dispatch({
        type:"LIKE",
        id:id
    }),
    removeLike: (id)=>dispatch({
        type:"DISLIKE",
        id:id
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProductListItem)