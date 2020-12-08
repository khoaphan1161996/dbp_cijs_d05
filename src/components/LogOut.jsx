import '../assets/css/LogOut.css'

export function LogOut(props) {
    return (
        <div className="LogOut">
            <button onClick={props.onClickLogOut} >LogOut</button>
        </div>
    )
}