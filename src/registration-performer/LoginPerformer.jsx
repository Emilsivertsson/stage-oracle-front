
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {getOnePerformer, loginPerformer} from "../api/Registration-Perfomer-Axios.jsx";
import Cookies from 'universal-cookie';

import {Link, useNavigate} from "react-router-dom";

const cookies = new Cookies();

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
            if (result.success) {
                const updatedUsernameCookie = cookies.get("username");
                if(updatedUsernameCookie === "admin") {
                    navigate("/adminHome");
                } else {
                    const performerLoggedIn = await getOnePerformer();
                    if(performerLoggedIn.data.firstName !== "" && performerLoggedIn.data.firstName !== null) {
                        navigate("/performerHome");
                    } else {
                        navigate("/profileUpdate");
                }
            }


            } else {
                setErrorMessage("Login failed. Please try again.")
                console.log("Login failed. Please try again.");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main-div>
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



        </main-div>
    );
}