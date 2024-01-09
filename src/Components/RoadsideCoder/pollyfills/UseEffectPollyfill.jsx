import { useEffect, useState } from "react";
import { useRef } from "react";

const useEffectHook = (cb, deps) => {
    const firstRender = useRef(true);
    const prevDeps = useRef([]);
    
    if (firstRender.current) {
        firstRender.current = false;
        // cb();
        // return;

        const cleanUp = cb();

        return () => {
            if (cleanUp && typeof cleanUp === "function") {
                cleanUp();
            }
        }
    }

    console.log(JSON.stringify([5])); // [5] "string" type 

    const depsChanged= deps ? JSON.stringify(prevDeps.current) !== JSON.stringify(deps) : true;

    if (depsChanged) {
        const cleanUp = cb();
        if (cleanUp && typeof cleanUp === "function" && deps) {
            cleanUp();
        }
    }

    prevDeps.current = deps || [];
}



const UseEffectPollyfill = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log("useEffect hook called");
    // }, [count])

    useEffectHook(() => {
        console.log("useEffect hook called");
    }, [count])

    const handleInc = () => {
        setCount(count + 1);
    }

    const handleDec = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h1>Pollyfill for useEffect Hook and Count - { count }</h1>
            <button onClick={() => handleInc()}>Inc</button>
            <button onClick={() => handleDec()}>Dec</button>
        </>
    )
}

export default UseEffectPollyfill;