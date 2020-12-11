import '../assets/css/SignIn.css'

export function SignIn(props) {
    return (
        <div className="container">
        <div className="signup-form">
            <div className="form-controls">
                <div className="form-control" >
                    <label htmlFor="name">Name User</label>
                    <input onChange={(e)=>props.handleChange(e,"name")} type="text" id="name" placeholder="Enter your user"/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=>props.handleChange(e,"password")} type="password" id="password" placeholder="Enter your password"/>
                </div>
                <button onClick={props.dangnhap} className="btn-signup">Sign In</button>
            </div>
        </div>
    </div>
        
    )
}