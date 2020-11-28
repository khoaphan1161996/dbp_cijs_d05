import '../assets/css/Show.css'

export function Show(props) {
    return (
        <div className="Show">
            <img src={props.imageLink} alt="cannot load"></img>
            <p><b>Organization name:</b> {props.title}</p>
            <p><b>Organization home country:</b> {props.country}</p>
            <p><b>Countries the organization serves:</b> {props.region}</p>
            <p><b>Activities: </b> {props.activities}</p>
            <a href={props.projectLink} target="_blank">More Info</a>
        </div>
    )
}