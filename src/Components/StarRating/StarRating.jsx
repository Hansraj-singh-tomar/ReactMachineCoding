import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRating = () => {  // rating = 3
    const [rating, setRating] = useState(3)

    const handleRating = (i) => {
        setRating(i + 1);
    }

    let hasHalfStar = rating % 1 !== 0; // to check it has half rating or not
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Rating : </h1>
            {
                [...Array(5)].map((_, i) => {
                    return (
                        <span key={i} onClick={() => handleRating(i)}>
                            {rating > i ? <AiFillStar fontSize={22} /> : <AiOutlineStar fontSize={22} />}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default StarRating