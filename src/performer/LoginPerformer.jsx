
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {loginPerformer} from "../api/PerfomerAxios.jsx";

import {Link, useNavigate} from "react-router-dom";



export default function LoginPerformer() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();

        try {
            const result = await loginPerformer(username, password);
            console.log(result);
            navigate("/performerHome");

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
                                  placeholder="Enter email"/>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  name="password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  placeholder="Password"/>
                </Form.Group>
                <br/>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>

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