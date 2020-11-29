import '../assets/css/Form.css'

export function Form(props){
    return (
        <div>
            <form>
                <input placeholder="Enter your task" onChange={props.onChange} />
                <button type="submit" onClick={props.onClick}>Add Task</button>
            </form>
        </div>
    )
}