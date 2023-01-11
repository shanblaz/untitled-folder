import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../redux/action";
import { Button, Form } from "react-bootstrap";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (credentials, history) => {
      dispatch(login(credentials, history));
    },
  };
};

const Login = ({ token, onLogin, history }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  console.log(history, "oonnnnn");

  const handleInputChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onLogin(credentials, history);
    // Dispatch an action to send the credentials to the server
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="align-items-center d-flex justify-content-center"
    >
      <Form className="border p-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User</Form.Label>
          <Form.Control
            name="email"
            onChange={handleInputChange}
            placeholder="Enter user"
          />
          <Form.Text className="text-muted">use: kminchelle</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          <Form.Text className="text-muted">use pw: 0lelplR</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
