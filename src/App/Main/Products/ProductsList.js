import React from 'react'
import ProductListItem from './ProductListItem'

const ProductsList = () => {
    return (
        <div>
            <h1 className="page-title">Products List</h1>
            <div className="row">
                <div className="col-lg-6">
                    <ProductListItem
                        name="Iphone X"
                        description = "This is Iphone X"
                        type = "Phone"
                        capacity = "256"
                        price = "1000"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                        name ="Iphone XS"
                        description = "This is Iphone XS"
                        type = "Phone"
                        capacity = "64"
                        price = "1700"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                        name ="Iphone XS Max"
                        description = "This is Iphone XS MAx"
                        type = "Phone"
                        capacity = "128"
                        price = "900"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                        name = "Iphone 7 Plus"
                        description = "This is Iphone 7 Plus"
                        type = "Phone"
                        capacity = "128"
                        price = "940"
                    />
                </div>  
            </div>
        </div>
    )
}

export default ProductsList