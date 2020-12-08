import '../assets/css/SignUp.css'

export function SignUp(props) {
    return (
        <div className="container">
            <div className="signup-form">
                <div className="form-controls">
                    <div className="form-control">
                        <label htmlFor="email">Enter your email</label>
                        <input type="email" id="email" placeholder="khoa07@gmail.com" />
                    </div>
                    <div className="form-control" >
                        <label htmlFor="name">Name User</label>
                        <input type="text" id="name" placeholder="Enter your user" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <button onClick={props.dangki} className="btn-signup">Sign Up</button>
                </div>
            </div>
        </div>

    )
}