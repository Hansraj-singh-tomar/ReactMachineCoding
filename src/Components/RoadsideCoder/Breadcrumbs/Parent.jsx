import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Productlisting from './Product-listing'
import Productdetails from './product-details'
import Breadcrumbs from './components/Breadcrumbs'


const Parent = () => {
    return (
        <BrowserRouter>
            <div className=''>
                <h1 className='my-4 text-center font-bold text-2xl bg-amber-50 shadow-lg p-4'>Breadcrumbs Functionality</h1>
                <Breadcrumbs />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Productlisting />} />
                    <Route path="/products/:id" element={<Productdetails />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Parent