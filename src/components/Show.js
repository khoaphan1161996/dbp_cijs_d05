import '../assets/css/Show.css'

export function Show(props) {
    return (
        <div className="Show">
            <h4 className="title">{props.title}</h4>
            <div className="row">
                <img className="ava" src={props.url} />
                <div className="c3">
                    <h3 className="info">{props.author}</h3>
                    <h3 className="info">{props.publisher}</h3>
                    <h3 className="info">{props.published}</h3>
                </div>
            </div>
        </div>
    )
}