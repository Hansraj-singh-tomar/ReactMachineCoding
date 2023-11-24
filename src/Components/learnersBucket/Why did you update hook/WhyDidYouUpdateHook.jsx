// The hook we have to create is what causes the component to re-render

import { useEffect, useRef } from "react"

const useWhyDidYouUpdate = (name, props) => {
    // const prevProps = useRef("abcd");
    // console.log(prevProps.current); // "abcd"

    const prevProps = useRef();

    useEffect(() => {
        if (prevProps.current) {  // to check prevProps.current has any value then we have to make comparison
            // there are two types of comparison first is equality check(object ko chhod kar) and second for object
            const keys = Object.keys({ ...prevProps.current, ...props });
            
            const whyupdated = {}
            
            keys.forEach((key) => {
                if (typeof prevProps.current[key] === 'object' && props[key] === 'object') {
                    // we will convert them to stringify
                    if (JSON.stringify(prevProps.current[key]) !== JSON.stringify(props[key])) {
                        whyupdated[key] = {
                            from: prevProps.current[key],
                            to: props[key]
                        }
                    }
                } else {
                    if (prevProps.current[key] !== props[key]) {
                        whyupdated[key] = {
                            from: prevProps.current[key],
                            to: props[key]
                        }
                    }
                }
            })

            if (Object.keys(whyupdated).length) {
                console.log("This has caused re-render", whyupdated);  // This has caused re-render {count: {…}} => count: {from: 1, to: 2}
            }
        }
        prevProps.current = props;
    }, [name, props])

}

export default useWhyDidYouUpdate;