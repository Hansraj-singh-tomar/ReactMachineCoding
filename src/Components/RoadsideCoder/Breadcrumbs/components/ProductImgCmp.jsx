import React from 'react'

const ProductImgCmp = ({ product }) => {
    return (
        <div className='flex items-center justify-center flex-1 mx-4'>
            <div className='mx-2'>
                {
                    product?.images.slice(2, 5).map((img, i) => {
                        return <img key={i} className='w-32 h-32 object-fill my-4' src={img} alt="" />
                    })
                }
            </div>
            <div className='mx-4'>
                <img className='w-60 h-60 object-fill' src={product?.thumbnail} alt="img" />
            </div>
        </div>
    )
}

export default ProductImgCmp