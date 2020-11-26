import '../assets/css/Show.css'

export function Show(props) {
    return (
        <div className="Show">
            <h3>{props.title}</h3>
            <div className="row">
                <img src={props.img} alt="cannot load"></img>
                <div className="info" >
                    <h4 className="author">Author: {props.author}</h4>
                    <h4 className="publiser">Puplisher: {props.publisher}</h4>
                    <h4 className="publised">Published: {props.published}</h4>
                </div>
            </div>

        </div>
    )
}