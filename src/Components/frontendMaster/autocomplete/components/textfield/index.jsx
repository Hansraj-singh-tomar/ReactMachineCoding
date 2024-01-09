
// eslint-disable-next-line react/prop-types
function Textfield({ text = '' , onChange = () => { }, onKeypress = () => {}, disabled=false}) {
    return <input disabled={disabled} type="text" value={text} onChange={onChange} onKeyUp={onKeypress} placeholder="Enter Your Language"/>
}

export default Textfield;