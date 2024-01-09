
// const areNotEqual = (prevDeps, nextDeps) => {
//     if (prevDeps == null) return false;

//     // now we will compare the length both of this  // its an array for that we will check an length of it
//     if (prevDeps.length !== nextDeps.length) return false;

//     for (let i = 0; i < prevDeps.length; i++){
//         if (prevDeps[i] !== nextDeps[i]) {
//             return false;
//         }
//     }

//     return true;
// }


// const UseMemoPollyfill = (cb, deps) => {
    //     // variable or state  => cached value
    //     const memoizedRef = useRef(null);
    
    //     // changes in deps
    //     // condition false hone par andara nhi jana hai
    //     if (!memoizedRef.current || areNotEqual(memoizedRef.current.deps, deps)) { // if they are not eqaul only then compate it
    //         memoizedRef.current = {
        //             value: cb(),
        //             deps
        //         }
//     }

//     // cleanup logic
//     useEffect(() => {
    //         return () => {
        //             memoizedRef.current = null;
        //         }
        //     }, []);
        
        //     // return the memoized value (if any)
        //     return memoizedRef.current.value;
        // }
        
        // export default UseMemoPollyfill;
        
        // // how many time you re-render the components the value of useRef still persistance
        
        
import { useEffect, useMemo, useRef, useState } from "react";

    const useMemoHook = (cb, deps) => {
        const memoizedRef = useRef(null);

        function areNotEqual(prevDeps, nextDeps) {
            if (prevDeps == null) return true;

            if (prevDeps.length !== nextDeps.length) {
                return true;
            }

            for (let i = 0; i < prevDeps.length; i++){
                if (prevDeps[i] !== nextDeps[i]) {
                    return true;
                }
            }

            return false;
        }

        if (!memoizedRef.current || areNotEqual(memoizedRef.current.deps, deps)) {
            memoizedRef.current = {
                value: cb(),
                deps
            }
        }

        useEffect(() => {
            return () => {
                memoizedRef.current = null;
            }
        }, [])

        return memoizedRef.current.value;
    }

const UseMemoPollyfill = () => {
    const [count, setCount] = useState(0);
    const [counter2, setCounter2] = useState(100);

    // const squaredValue = () => {
    //     console.log("Expensive Calculation ...");
    //     return count * count;
    // }

    // this function will called when count value changed
    // const squaredValue = useMemo(() => {
    //     console.log("Expensive Calculation ...");
    //     return count * count;
    // }, [count])

    // Custom useMemo() Hook
    const squaredValue = useMemoHook(() => {
        console.log("Expensive Calculation ...");
        return count * count;
    }, [count])

    return (
        <>
            <h1>Pollyfill for useEffect Hook </h1>
            <h2>Counter: {count}</h2>
            <h2>Square Counter: {squaredValue}</h2>
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <h2>Counter2: {counter2}</h2>
            <button onClick={() => setCounter2(counter2 - 1)}>Dec</button>
        </>
    )
}

export default UseMemoPollyfill;