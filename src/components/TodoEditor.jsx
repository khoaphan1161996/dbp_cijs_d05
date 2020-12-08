import '../assets/css/TodoEditor.css'

export function TodoEditor(props) {
    let content = props.content
    return (
        <div className="edit">
            <textarea defaultValue={content} onChange={e => { content = e.target.value }} onKeyDown={(e) => props.onKeyDownSave(e,props.indx, content )}></textarea>
            <button onClick={() => props.onClickSave(props.indx, content )} >Save</button>
        </div>
    )
}