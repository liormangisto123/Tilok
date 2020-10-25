import React, { Component } from "react";
import { Form, Col, Button, Tabs, Tab } from "react-bootstrap";
import "./css/register.css";

class Register extends React.Component {
  Alertt = () => {
    alert("Login in Seccessfull");
  };

  render() {
    return (
      <div className="formstyle">
        <br />
        <br />

        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="Ta"
        >
          <Tab eventKey="home" title="Sign up - Guide">
            <div className="Register">
              <h1 className="title">Guide Register</h1>

              <div className="form">
                <Form id="formRegisterGuide">
                  <Form.Group>
                    <Form.Label>First Name : </Form.Label>
                    <Form.Control placeholder="Enter First Name..." />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name : </Form.Label>
                    <Form.Control placeholder="Enter Last Name..." />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" placeholder="Enter E-mail..." />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>England</option>
                        <option>Franc</option>
                        <option>Italy</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Enter City..." />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Languages</Form.Label>
                    <Form.Control placeholder="Enter Languages..." />
                  </Form.Group>
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="Enter Phone Number..." />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <div className="Button">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={this.Alertt}
                    >
                      Sing up
                    </Button>
                    <Button as="input" type="reset" value="Reset"></Button>
                  </div>
                </Form>
              </div>

              <Button href="/login" variant="link">
                Already Sign in? Click Here To <strong>Log In</strong>
              </Button>
            </div>
          </Tab>

          <Tab eventKey="profile" title="Sign up - Tourist">
            <div>
              <h1 className="title">Tourist Register</h1>

              <div className="form">
                <Form id="formTourist">
                  <Form.Group>
                    <Form.Label>First Name : </Form.Label>
                    <Form.Control placeholder="Enter First Name..." />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name : </Form.Label>
                    <Form.Control placeholder=" Enter Last Name..." />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" placeholder="Enter E-mail..." />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password..."
                    />
                  </Form.Group>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <div className="Button">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={this.Alertt}
                    >
                      Sing up
                    </Button>

                    <Button as="input" type="reset" value="Reset"></Button>
                  </div>
                </Form>
              </div>
              <Button href="/login" variant="link">
                Already Sign in? Click Here To <strong>Log In</strong>
              </Button>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
export default Register;
