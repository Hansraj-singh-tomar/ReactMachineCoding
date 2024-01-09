import './style.css'
// eslint-disable-next-line react/prop-types
function Row({data={}, onClick = () => {}}) {
    const { id="", value='' } = data;
    return (
        <button
            className='suggestion-button'
            key={id}
            onClick={() => onClick({id, value})}
        >
            {value}
        </button>
    )
}

export default Row