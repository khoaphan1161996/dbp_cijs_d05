import '../assets/css/TodoEditor.css'

export function TodoEditor(props){
    return (
        <div className="edit">
            <textarea defaultValue={props.input}></textarea>
            <button onClick>Save</button>
        </div>
    )
}