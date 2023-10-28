import React, {useState} from 'react'

const RangeInput = () => {
    const [range, setRange] = useState(50)
    function handleRange(e){
        setRange(e.target.value)
    }

  return (
    <div>
        <label>Current Range is : {range}</label>
        <input onChange={handleRange} type="range" min={0} max={100} value={range}/>
    </div>
  )
}

export default RangeInput