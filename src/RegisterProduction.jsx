
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";


export default function LoginPerformer() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);



    function handleSubmit (e) {
        e.preventDefault();
        setButtonClicked(true);

        const configuration = {
            method: "post",
            url: "http://localhost:8081/auth/register",
            data: {
                username: username,
                password: password
            }
        };

        axios(configuration)
            .then(result => {
                console.log(result);
                setRegistered(true);
                console.log(result.data);


            })
            .catch(error => {
                console.log(error);
                setRegistered(false);
            });
    }

    return (
        <>
            <h2>Register Production</h2>
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
                    Register
                </Button>
            </Form>

            {buttonClicked && (registered ? (
                <h3>Registered</h3>,
                    <Link to={"/loginProduction"}>Login</Link>
            ) : (
                <h3>Not Registered, please try again</h3>
            ))}
        </>
    );
}