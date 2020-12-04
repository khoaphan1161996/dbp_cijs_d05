import '../assets/css/List.css'

export function List(props) {
    return (
        <ul className="todos">
            <li className="todo">
                <p className="inputTask margin" type="text" >{props.content}</p>
                <div className="but">
                    <button onClick={props.onClickEdit} className="marginbut"><i class="fa fa-trash"></i></button>
                    <button onClick={props.onClickDel} className="marginbut"><i class='fa fa-edit'></i></button>
                </div>
            </li>
        </ul>

    )
}