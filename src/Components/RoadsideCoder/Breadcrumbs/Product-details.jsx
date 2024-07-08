import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductImgCmp from './components/ProductImgCmp';
import ProductDetailCmp from './components/ProductDetailCmp';

const Productdetails = () => {
    const { id } = useParams();

    const [singleProduct, setSingleProduct] = useState();

    async function fetchSingleProduct(id) {
        let res = await fetch(`https://dummyjson.com/products/${id}`)
        res = await res.json();
        setSingleProduct(res);
    }

    useEffect(() => {
        fetchSingleProduct(id);
    }, [])

    return (
        <div className='w-10/12 mx-auto mt-6 py-6 bg-amber-50 shadow-2xl rounded-lg  flex'>
            {/* Product Image component */}
            <ProductImgCmp product={singleProduct} />
            {/* Product Detail component */}
            <ProductDetailCmp product={singleProduct} />
        </div>
    )
}

export default Productdetails