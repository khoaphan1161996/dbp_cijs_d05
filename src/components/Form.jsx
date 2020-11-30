import '../assets/css/Form.css'

export function Form(props) {
    return (
        <div className="Form">
            <input placeholder="Enter your tasks" onKeyDown={props.onKeyDown} />
        </div>
    )
}