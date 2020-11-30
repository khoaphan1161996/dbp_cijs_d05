import '../assets/css/Form.css'

export function Form(props) {
    return (
        <div className="Form">
            <input placeholder="Enter your task" onKeyDown={props.onKeyDown} />
        </div>
    )
}