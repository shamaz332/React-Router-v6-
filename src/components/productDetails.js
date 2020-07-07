import React from 'react'
import {useParams} from "react-router-dom"
export const ProductDetails = () => {

const {productID} = useParams();

    return (
        <div>
        Details of {productID}    
        </div>
    )
}
