
import {useContext, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {getOnePerformer, loginPerformer} from "../api/Registration-Perfomer-Axios.jsx";
import Cookies from 'universal-cookie';
import AppContext from "../AppContext.jsx";


import {Link, useNavigate} from "react-router-dom";

const cookies = new Cookies();

export default function LoginPerformer() {

    const {globalState, updateGlobalState} = useContext(AppContext);
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
                updateGlobalState({
                    ...globalState,
                    loggedIn: true
                });
                if(updatedUsernameCookie === "admin") {
                    navigate("/adminHome");
                } else {
                    const performerLoggedIn = await getOnePerformer();
                    if (performerLoggedIn.data.firstName !== "" && performerLoggedIn.data.firstName !== null) {
                        navigate("/performerHome");
                    } else {
                        navigate("/profileUpdate");
                    }
                }
            } else if (result.message.includes("400") || result.message.includes("404")) {
                setErrorMessage("No user found");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main-div>
            <h1>Login Performer</h1>
            <Form className="form" onSubmit={(e) => handleSubmit(e)}>
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
            {buttonClicked && !errorMessage && <h3>Loading...</h3>}
            {errorMessage && <h3>{errorMessage}</h3>}

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