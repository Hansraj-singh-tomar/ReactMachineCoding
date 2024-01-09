import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Breadcrumbs = () => {
    const { pathname } = useLocation();
    let pathArr = pathname.split("/").filter(x => x)
    let breadcrumPath = "";
    // console.log(breadcrumPath);
    return (
        <div className='w-10/12 mx-auto mb-4'>
            <Link className='font-medium' to="/">Home</Link>
            {
                pathArr.map((path, i) => {
                    breadcrumPath += `/${path}`
                    console.log(breadcrumPath);
                    const isLast = i === pathArr.length - 1;
                    return (isLast ? (
                        <span className='font-medium' key={breadcrumPath}>/ {path}</span>
                    ) : (
                        <span className='font-medium' key={breadcrumPath}>/<Link to={breadcrumPath}>{path}</Link></span>
                    ))
                })
            }
            <hr />
        </div>
    )
}

export default Breadcrumbs