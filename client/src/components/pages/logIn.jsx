import React, { Component } from "react";
import '../../components/css/Login.css'

export default class Login extends Component {
    render() {
        return (
            <form className="Login">
                <div className="title2">
                <h1>Login</h1>
                </div>
                

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <button type="submit" className="btn" width="50">Login</button>
                <p className="forgot-password text-left">
                     <a href="#">Forgot password ?</a>
                </p>
            </form>
        );
    }
}
