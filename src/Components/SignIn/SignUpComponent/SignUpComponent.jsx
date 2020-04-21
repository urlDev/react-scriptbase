import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Button, Form } from "react-bootstrap";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils.js";

import "./SignUpComponent.scss";

const SignUpComponent = () => {
  let history = useHistory();
  const [input, setInput] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName } = input;

    try {
      //user is what we create with email and password with creating user function, and giving it auth
      const { user } = await auth.createUserWithEmailAndPassword(
        input.email,
        input.password
      );

      //wait for function to create a user with firstName
      await createUserProfileDocument(user, { displayName });

      //once its done, set states to initial
      setInput({});
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  return (
    <Col className="mt-5 signUpComponent" sm={12} md={6}>
      <h1 className="signUpTitle">I don't have an account</h1>
      <h3 className="subtitle">Sign up with your email and password</h3>
      <Form className="mt-5 mb-5" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="displayName"
            type="text"
            placeholder="First name"
            className="form-control"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="Last name"
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Col className="p-0 mb-5">
          <Button
            variant="outline-dark"
            className="mt-5 btn-lg p-3 signUpButton"
            type="submit"
            block
          >
            SIGN UP
          </Button>
        </Col>
      </Form>
    </Col>
  );
};

export default SignUpComponent;
