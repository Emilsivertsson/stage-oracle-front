
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import {registerPerformer} from "../api/PerfomerAxios.jsx";


export default function LoginPerformer() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setButtonClicked(true);
        try {
            const result = await registerPerformer(username, password);
            console.log(result);
            if (result.data === "User registered successfully") {
                setRegistered(true);
                navigate("/loginPerformer");

            }
        } catch (error) {
            console.log(error);
            setRegistered(false);
        }
    }

    return (
        <>
            <h2>Register Performer</h2>
            <br/>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="Username"
                                  name="username"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  placeholder="Enter username"/>
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
                    Register
                </Button>
            </Form>

            {buttonClicked && ( !registered ? (
                <h3>Registered..redirecting</h3>
            ) : (
                <h3>Not Registered,Try again!</h3>
            ))}
        </>
    );
}