import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    
    const parameters = useParams()

    return (
        <div>
            Product Detail Page
            <hr/>
            <h5>{parameters.pId}</h5>
            <h5>{parameters.pName}</h5>
        </div>
    )
}
