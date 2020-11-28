import '../assets/css/Search.css'

export function Search(props){
    return (
        <div className="Search">
            <input type="text" onKeyDown={props.onKeyDown} placeholder="Enter a Charity name or Category"></input>
        </div>
    )
}