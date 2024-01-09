import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState();

    async function fetchProducts() {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setTrendingProducts(data?.products?.slice(0, 10));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <>
            <div className='w-10/12 mx-auto my-10 grid grid-cols-3 gap-4 '>

                {
                    trendingProducts?.map((val, i) => {
                        return (
                            <div key={val.id} className='shadow-xl rounded-lg bg-amber-50'>
                                <Link to={`/products/${val.id}`}>
                                    <img className='w-full aspect-video rounded-lg' src={val.thumbnail} alt="img" />
                                    <h1 className='text-center p-4 font-bold '>{val.title} - ${val.price}</h1>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

            <Link to="products">
                <div className='w-60 mx-auto text-center front-bold bg-green-800 text-white m-6 py-4 rounded-lg text-2xl'>
                    Show More
                </div>
            </Link>
        </>
    )
}

export default Home