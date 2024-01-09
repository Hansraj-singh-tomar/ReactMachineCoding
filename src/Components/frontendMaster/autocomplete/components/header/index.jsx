import './style.css'
import Textfield from "../textfield";
import Timer from "../timer";

// eslint-disable-next-line react/prop-types
function Header({language, onLanguageChange, onKeypress, time, enableTyping}) {
    return (
        <div className='header'>
            <Textfield disabled={enableTyping} text={language} onChange={onLanguageChange} onKeypress={ onKeypress } />
            <Timer value={ time } />
        </div>
    )
}

export default Header;