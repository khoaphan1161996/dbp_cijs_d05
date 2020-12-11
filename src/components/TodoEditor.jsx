import '../assets/css/TodoEditor.css'

export function TodoEditor(props) {
    let todoE = props.todoE
    return (
        <div className="edit">
            <textarea defaultValue={todoE} onChange={(e) => { todoE = e.target.value }} onKeyDown={(e) => props.onKeyDownSave(e,props.indx, todoE )}></textarea>
            <button onClick={() => props.onClickSave(props.indx, todoE )} >Save</button>
        </div>
    )
}