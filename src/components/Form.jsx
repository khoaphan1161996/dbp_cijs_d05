import '../assets/css/Form.css'

export function Form(props) {
    return (
        <div className="Form">
            <input placeholder="Enter your task" onChange={props.onChange} />
            <button onClick={props.onClick}>Add Task</button>
        </div>
    )
}