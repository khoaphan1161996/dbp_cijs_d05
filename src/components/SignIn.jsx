import '../assets/css/SignIn.css'

export function SignIn(props) {
    return (
        <div className="container">
        <div className="signup-form">
            <div className="form-controls">
                <div className="form-control" >
                    <label htmlFor="name">Name User</label>
                    <input type="text" id="name" placeholder="Enter your user"/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password"/>
                </div>
                <button onClick={props.dangnhap} className="btn-signup">Sign In</button>
            </div>
        </div>
    </div>
        
    )
}