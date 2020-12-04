import '../assets/css/List.css'

export function List(props) {
    return (
        <ul className="todos">
            <li className="todo">
                <span className="inputTask margin" type="text" >{props.content}</span>
                <div className="but">
                    <button onClick={props.onClickEdit} className="marginbut">Edit</button>
                    <button onClick={props.onClickDel} className="marginbut">Delete</button>
                </div>
            </li>
        </ul>

    )
}