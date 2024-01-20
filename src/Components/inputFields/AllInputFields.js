import React, { useRef, useState } from 'react'

const AllInputFields = () => {

    const [numAllowed, setNumAllowed] = useState(true);
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("");
    const passwordRef = useRef();

    return (
        <div>
            {/* Type - Checkbox */}
            <input
                defaultChecked={numAllowed}
                type="checkbox"
                id="numberInput"
                onChange={() => setNumAllowed((prev) => !prev)}
            />

            {/* Type - Range */}
            <input
                value={length}
                type="range"
                min={6}
                max={50}
                onChange={(e) => setLength(e.target.value)}
            />

            {/* Type - Text */}
            {/* We can use useState or useRef together on single input field */}
            <input
                ref={passwordRef}
                value={password}
                type="text"
                readOnly
                placeholder="Password"
            />
        </div>
    )
}

export default AllInputFields