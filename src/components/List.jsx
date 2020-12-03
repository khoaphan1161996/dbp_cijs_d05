import '../assets/css/List.css'

export function List(props) {
    return (
        <ul>
            <li className="todo">
                <span className="inputTask margin" type="text" >{props.content}</span>
                <button onClick={props.onClickEdit} className="margin">Edit</button>
                <button onClick={props.onClickDel} className="margin">Delete</button>
            </li>
        </ul>

    )
}