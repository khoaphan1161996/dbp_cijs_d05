import '../assets/css/List.css'

export function List(props) {
    return (
        <ul className="todos">
            <li className="todo">
                <p className="inputTask margin" type="text" >{props.content}</p>
                <div className="but">
                    <button onClick={props.onClickEdit} className="but"><i class="icon-trash"></i></button>
                    <button onClick={props.onClickDel} className="but"><i class="fa fa-trash"></i></button>
                </div>
            </li>
        </ul>

    )
}