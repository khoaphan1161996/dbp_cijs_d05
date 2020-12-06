import '../assets/css/Sign.css'

export function Sign(props) {
    return (
        <div className="Sign">
            <button onClick={props.onClickSignUp} className="SignUp">SignUp</button>
            <button onClick={props.onClickSignIn} className="SignIn">SignIn</button>
        </div>
    )
}