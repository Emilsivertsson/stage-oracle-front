
import {useContext, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {loginUser} from "../api/Production-User-Axios.jsx";
import {Link, useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";
import AppContext from "../AppContext.jsx";

const cookies = new Cookies();


export default function LoginUser() {

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
            const result = await loginUser(username, password);
            console.log(result);
            if (result.success) {
                const updatedUsernameCookie = cookies.get("username");
                updateGlobalState({
                    ...globalState,
                    loggedIn: true,
                    production: true
                });
                navigate(updatedUsernameCookie === "admin" ? "/adminProductionHome" : "/productionHome");
            } else if (result.message.includes("400") || result.message.includes("404")) {
                setErrorMessage("No user found");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main-div>
            <h1>Login Production User</h1>
            <br/>
            <Form className="form" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="Username"
                                  name="username"
                                  value={username}
                                  required={true}
                                  onChange={(e) => setUsername(e.target.value)}
                                  placeholder="Enter Username"/>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  name="password"
                                  value={password}
                                  required={true}
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
            <Link to="/registerProductionUser">
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Link>



        </main-div>
    );
}