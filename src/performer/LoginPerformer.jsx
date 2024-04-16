
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {loginPerformer} from "../api/PerfomerAxios.jsx";

import {Link, useNavigate} from "react-router-dom";



export default function LoginPerformer() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();
        setButtonClicked(true);

        try {
            const result = await loginPerformer(username, password);
            console.log(result);
            if (result.success) {
            navigate("/performerHome");
            } else {
                setErrorMessage("Login failed. Please try again.")
                console.log("Login failed. Please try again.");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2>Login Performer</h2>
            <br/>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="Username"
                                  name="username"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  placeholder="Enter Username"/>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  name="password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  placeholder="Enter Password"/>
                </Form.Group>
                <br/>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <br/>
            {buttonClicked && !errorMessage && <p>Loading...</p>}
            {errorMessage && <p>{errorMessage}</p>}

            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Don't have an account?</p>
            <Link to="/registerPerformer">
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Link>



        </>
    );
}