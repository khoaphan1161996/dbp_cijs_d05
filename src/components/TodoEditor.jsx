import '../assets/css/TodoEditor.css'

export function TodoEditor(props){
    return (
        <div className="edit">
            <textarea defaultValue={props.input}></textarea>
            <button>Save</button>
        </div>
    )
}