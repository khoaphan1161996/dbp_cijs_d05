import '../assets/css/searchbar.css'
export function SearchBar(props) {
    return (
        <input onChange={props.onChange} className="full" type="text" placeholder="Enter your emoji..." />
    )
}   
