import '../assets/css/Show.css'

export function Show(props) {
    return (
        <div className="Show">
            <h3>{props.title}</h3>
            <div className="row">
                <img src={props.img}></img>
                <div>
                    <h4 className="author">{props.author}</h4>
                    <h4 className="publiser">{props.publisher}</h4>
                    <h4 className="publised">{props.published}</h4>
                </div>
            </div>

        </div>
    )
}