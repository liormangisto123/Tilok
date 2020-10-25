import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "../css/logIn.css";
import "../css/register.css";
export default class Login extends Component {
  render() {
    return (
      <div className="formstyle">
        <br />
        <br />
        <br />
        <br />

        <h1 className="title">Log In</h1>
        <Form id="formLogin">
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="Enter E-mail..." />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password..." />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <div className="Button">
            <Button variant="primary" type="submit" onClick={this.Alertt}>
              Sing up
            </Button>

            <Button as="input" type="reset" value="Reset"></Button>
          </div>
        </Form>

        <Button href="/signUp" variant="link">
          Dont have account Click here to <strong>Sing in</strong>
        </Button>
      </div>
    );
  }
}
