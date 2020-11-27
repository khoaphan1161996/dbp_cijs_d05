import '../assets/css/Show.css'

export function Show(props) {
    return (
        <div className="Show">
            <img src={props.img} alt="cannot load"></img>
            <h3>Organization name: {props.title}</h3>
            <h4>Organization home country: {props.title}</h4>
            <h4>Countries the organization serves: {props.title}</h4>
            <h4 className=""> {props.instruction}</h4>
            <a href={props.link} target="_blank">More Info</a>
        </div>
    )
}