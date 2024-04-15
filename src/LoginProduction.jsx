
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function LoginPerformer() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    function handleSubmit (e) {
        e.preventDefault();

        const configuration = {
            method: "post",
            url: "http://localhost:8081/auth/login",
            data: {
                username: username,
                password: password
            }
        };

        axios(configuration)
            .then(result => {
                console.log(result);
                setLogin(true);
                cookies.set("jwt", result.data.jwt, {path: "/"});
                console.log(cookies.get("jwt"));

            })
            .catch(error => {
                console.log(error);
                setLogin(false);
            });
    }

    return (
        <>
            <h2>Login Production</h2>
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

                <Button variant="primary" type="submit" size={"sm"} >
                    Login
                </Button>
            </Form>
        </>
    );
}