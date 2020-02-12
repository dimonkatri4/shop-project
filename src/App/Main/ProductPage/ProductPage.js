import React from 'react'
import productsData, { getProductsMap } from '../Products/productsData'


const ProductPage = ({
    match,
    productsMap = getProductsMap(productsData)
}) => {
    console.log(match)
    return (
        <div>
            <h1 className="page-title">{productsMap[match.params.productId].name}</h1>
            <div>{productsMap[match.params.productId].description}</div>
        </div>
    )
}

export default ProductPage

