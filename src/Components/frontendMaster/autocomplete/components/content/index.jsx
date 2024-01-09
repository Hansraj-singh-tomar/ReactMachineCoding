import './style.css';
import Row from '../row';
// eslint-disable-next-line react/prop-types
function Content({ languages = [] }) {
    return (
        <div className="content">
            {
                languages ?. map((language) => {
                    return <Row data={language} key={language.id}/>
                })
            }
        </div>
    )
}

export default Content;