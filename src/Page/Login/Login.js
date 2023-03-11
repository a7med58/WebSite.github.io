import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://your-api-url.com/login", credentials)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="login">
      <div className="container">
        <h2 className="h2login">Login</h2>

        <div className="row">
          <div className="col-md-12 col-lg-12">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button className="btn" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
