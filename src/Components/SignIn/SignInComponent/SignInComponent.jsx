import React, { Component } from 'react';
import { Col, Button, Form } from 'react-bootstrap';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

import "./SignInComponent.scss";

class SignInComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			//wait for the auth to response 
			await auth.signInWithEmailAndPassword(email, password);
			//if theres a user like that, it will sign in and then set the states to empty
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<Col className="mt-5 signInComponent mb-5" sm={12} md={6}>
				<h1 className="signInTitle">I already have an account</h1>
				<h3 className="subtitle">Sign in with your email and password</h3>
				<Form className="mt-5" onSubmit={this.handleSubmit}>
					<Form.Group controlId="formGroupEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							name="email"
							onChange={this.handleChange}
							value={this.state.email}
							label="email"
							required
						/>
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							placeholder="Password"
							name="password"
							type="password"
							value={this.state.password}
							onChange={this.handleChange}
							label="password"
						/>
					</Form.Group>
					
					<Button variant="outline-dark" className="btn-lg mt-5 p-3 loginButton" type="submit" block>
						SIGN IN
					</Button>
					<Button
						onClick={signInWithGoogle}
						variant="outline-primary"
						className="mt-3 p-3 btn-lg googleButton"
						type="submit"
						block
					>
						SIGN IN WITH GOOGLE
					</Button>
				</Form>
			</Col>
		);
	}
}

export default SignInComponent;