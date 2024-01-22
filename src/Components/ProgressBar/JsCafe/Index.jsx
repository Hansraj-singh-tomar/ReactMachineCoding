import React, { useEffect, useState, useRef } from 'react'
import ProgressBar from './ProgressBar'

const totalMs = 15 * 1000;
const interval = 1 * 1000;
const totalCycles = totalMs / interval;
const progressMade = (interval / totalMs) * 100;
const Index = () => {
    const [progress, setProgress] = useState(0);

    const timer = useRef();
    const cyclesCompleted = useRef(0);
    useEffect(() => {
        timer.current = setInterval(() => {
            setProgress((prevProgress) => prevProgress + progressMade);
            cyclesCompleted.current += 1;
            if (cyclesCompleted.current === totalCycles) clearInterval(timer.current);
        }, interval);

        return () => {
            clearInterval(timer.current);
        };
    }, []);

    return (
        <div>
            <ProgressBar progress={progress} />
        </div>
    )
}

export default Index