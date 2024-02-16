import React, { useState, useRef, useEffect } from 'react'

const CheckoutStepper = ({ stepsConfig = [] }) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0,
    });

    const stepRef = useRef([]);

    useEffect(() => {
        console.log(stepRef.current[0].offsetWidth); // 116
        console.log(stepRef.current[stepsConfig.length - 1].offsetWidth); // 77
        setMargins({
            marginLeft: stepRef.current[0].offsetWidth / 2,
            marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
        })
    }, [stepRef]);

    if (!stepsConfig.length) return <></>;

    const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

    function handleNext() {
        setCurrentStep((prevStep) => {
            if (prevStep === stepsConfig.length) {
                setIsComplete(true)
                return prevStep;
            } else {
                return prevStep + 1;
            }
        })
    }

    function calculateProgressBarWidth() {
        return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
    }

    return (
        <>
            <div className='relative flex justify-between items-center mb-5'>
                {
                    stepsConfig.map((step, index) => {
                        return (
                            <div ref={el => (stepRef.current[index] = el)} key={step.name} className="flex flex-col items-center">
                                <div
                                    className={`w-7 h-7 font-semibold rounded-full bg-[#ccc] mb-1 flex justify-center items-center z-20 ${currentStep > index + 1 || isComplete ? "bg-[#28a745] text-white" : ""} ${currentStep === index + 1 ? "bg-[#007bff] text-white" : ""}`}
                                >
                                    {currentStep > index + 1 || isComplete ? (<span>&#10003;</span>) : (index + 1)}
                                </div>
                                <div className='text-lg font-semibold'>{step.name}</div>
                            </div>
                        )
                    })
                }
            </div>
            <ActiveComponent />
            {!isComplete && <button className='rounded-sm bg-gray-400 px-2' onClick={handleNext}>{currentStep === stepsConfig.length ? "Complete" : "Next"}</button>}

            <div className='absolute top-[10%] left-0 h-1 bg-[#ccc]' style={{ width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`, marginLeft: margins.marginLeft, marginRight: margins.marginRight }}>
                <div className="h-full bg-[#28a745] transition duration-200 ease" style={{ width: `${calculateProgressBarWidth()}%` }}></div>
            </div>
        </>
    )
}

export default CheckoutStepper