import React, { Component } from "react";
import '../../components/css/singUp.css'

class SignUp extends Component {
    render() {
        return (
            <form className="SignUp">
                <div className="title2">
                    <h1>Sing Up</h1>
                </div>

                <div className="form-group">
                    <label >First name</label>
                    <input type="text" className="form-control" placeholder="First name"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn">Sign Up</button>
                <p className="forgot-password text-left" >
                    <a href="#">Already registered sign in?</a>
                </p>
            </form>
        );
    }
}
export default SignUp;