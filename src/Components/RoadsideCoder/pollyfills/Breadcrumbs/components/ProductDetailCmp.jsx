import React from 'react'
import { IoStar, IoStarOutline } from "react-icons/io5";

const ProductDetailCmp = ({ product }) => {

    let rating = Math.floor(product?.rating);
    console.log(rating);
    // let hasHalfStar = rating % 1 !== 0;
    let star = []
    return (
        <div className='flex-1 flex flex-col justify-center items-start px-6'>
            <div className='flex'>

                {
                    [...Array(5)].map((_, i) => {
                        return (
                            <span key={i}>
                                {
                                    rating > i ? <IoStar /> : <IoStarOutline />
                                }
                            </span>
                        )
                    })
                }

            </div>
            <h1 className='font-extrabold text-3xl'>{product?.title}</h1>
            <p className='mb-1 font-semibold'>Availability {product?.stock > 0 && "In Stock"}</p>
            <p className='mb-2 text-green-400 text-2xl font-semibold'>${product?.price}</p>
            <p className='mb-2 font-semibold'>{product?.description}</p>
            <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cupiditate! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet?</p>
            <div>
                <button className='bg-green-900 text-white font-bold px-4 py-2 rounded-md'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetailCmp