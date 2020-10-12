import React, { Component } from "react";
import '../../components/css/logIn.css'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
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
                    <input type="text" className="form-control" placeholder="Enter password" />
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <button type="submit" className="btn-login" width="50">Login</button>
                <p className="forgot-password">
                     <a href="#">Forgot password ?</a>
                </p>
            </form>
            </div>
        );
    }
}