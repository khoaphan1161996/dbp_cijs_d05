import '../assets/css/Search.css'

export function Search(props){
    return (
        <div className="Search">
            <input onChange={props.onChange} placeholder="Type author,book name,subject,..." />
            <button onClick={props.onClick}>SEARCH</button>
        </div>
    )
}