import React, { useState } from 'react'

const Input = (props) => {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
    }
  return (
    <div>
          <input value={value} onChange={handleChange} />
          <br/>
          { props.renderTextBelow(value) }
    </div>
  )
}

export default Input