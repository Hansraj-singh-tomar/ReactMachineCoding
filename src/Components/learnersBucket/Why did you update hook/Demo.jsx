import { useState } from "react"
import useWhyDidYouUpdate from "./WhyDidYouUpdateHook"

const Demo = () => {
    const [count, setCount] = useState(1);
  return (
      <div>
          <Example count={count} />
          {/* <Example count={count} fn={() => {} } /> */}
          {/* <Example/> */}
          <div>{ count }</div>
          <button onClick={() => setCount(count+1)}>Click Me</button>
      </div>
  )
}

export default Demo

const Example = (props) => {
    useWhyDidYouUpdate('Example', props)
    // eslint-disable-next-line react/prop-types
    return <div>{ props.count }</div>
}

