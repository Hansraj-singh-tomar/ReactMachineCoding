import React from 'react'
import Input from './Input'

const RenderProps = () => {
    const showValue = (value) => <>The value is { value }</>
    const multiplyByTen = (value) => <>The multiplied value is { value * 10 }</>
    return (
    <div>
        {/* <Input renderTextBelow={(value) => <>The value is { value }</>} /> */}
        <Input renderTextBelow={showValue} />
        <br />
        <Input renderTextBelow={multiplyByTen} />
    </div>
  )
}

export default RenderProps