import Row from '../row';
import './style.css';

// eslint-disable-next-line react/prop-types
function Suggestions({ suggestions = [], onSuggestionSelect = () => { } }) {
    console.log(suggestions.length);
    return (
        <div className="suggestion">
            {
                suggestions ?. map((suggestion) => {
                    return <Row onClick={onSuggestionSelect} data={suggestion} key={suggestion.id}/>
                })
            }
        </div>
    )
}

export default Suggestions;