import { useState, useEffect } from "react"
const InfiniteScroll = () => {

    const [count, setCount] = useState(50);
    
    const onScroll = () => {
        // console.log("inner height", window.innerHeight); // 651px
        // console.log("scrollY", window.scrollY); // jitna scroll kiya hai uski height
        // console.log("offsetHeight", window.document.body.offsetHeight); // 901px  => 1 to 50 numbers ko show karne me jo vo height le rha hai uski height 901px hai  
        if (window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 30) {
            setCount(count + 50);   
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [count]);

    return (
      <div>
          {
              [...Array(count)].map((val, i) => {
                  return (
                      <div key={i}>{ i+1 }</div>
                  )
              })
        }
      </div>
  )
}

export default InfiniteScroll