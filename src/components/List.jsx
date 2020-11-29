import '../assets/css/List.css'

export function List(props) {
    return (
        <li className="todo">
            <span contentEditable="true" type="text">{props.input}</span>
            <button>Edit</button>
            <button>Delete</button>
        </li>
    )
}