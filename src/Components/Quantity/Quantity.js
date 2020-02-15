import React from 'react'

const Quantity = ({
    productsCount,
    onDecrementClick,
    onIncrementClick,
    minCount
}) => {
    return (
        <div className="product-quantity">
            <button onClick={()=>onDecrementClick()} disabled={productsCount <=minCount} >-</button>
            <input type="text" value = {productsCount} readOnly={true}></input>
            <button onClick={()=>onIncrementClick()} disabled={productsCount >=10} >+</button>
        </div>
    )
}

export default Quantity