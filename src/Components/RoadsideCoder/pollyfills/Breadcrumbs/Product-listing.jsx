import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Productlisting = () => {
    const [products, setProducts] = useState();

    async function fetchProducts() {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data?.products);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='w-10/12 mx-auto my-10 grid grid-cols-3 gap-4 '>
            {
                products?.map((val, i) => {
                    return (
                        <div key={val.id} className='shadow-xl rounded-lg'>
                            <Link to={`/products/${val.id}`}>
                                <img className='w-full aspect-video rounded-lg' src={val.thumbnail} alt="img" />
                                <h1 className='text-center p-4 font-bold bg-amber-50'>{val.title} - ${val.price}</h1>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Productlisting