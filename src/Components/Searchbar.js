import '../assets/css/searchbar.css'
export function SearchBar(props) {
    return (
        <input onKeyDown={props.onChange} className="full" type="text" placeholder="Enter your emoji..." />
    )
}   
