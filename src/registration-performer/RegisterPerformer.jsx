import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { registerPerformer } from "../api/Registration-Perfomer-Axios.jsx";

export default function LoginPerformer() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (validatePassword(newPassword)) {
            setIsPasswordCorrect(true);
            setPasswordError("");
        } else {
            setIsPasswordCorrect(false);

            setPasswordError("Password must be at least 8 characters long and include at least one letter and one number.");
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setButtonClicked(true);

        try {
            const result = await registerPerformer(username, password);
            if (result.success) {
                setRegistered(true);
                navigate("/loginPerformer");
            } else if (result.message === 'User already exists') {
                setErrorMessage("User already exists");
                setRegistered(false);
            } else {
                setErrorMessage("Registration failed. Please try again.");
                setRegistered(false);
            }
        } catch (error) {
            setErrorMessage("Registration failed. Please try again.");
            setRegistered(false);
        }
    }

    return (
        <main-div>
            <h1>Register New Performer</h1>
            <Form className="form" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        name="username"
                        value={username}
                        required={true}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        required={true}
                        onChange={handlePasswordChange}
                        placeholder="Enter Password"
                    />
                    {passwordError && <div className="text">{passwordError}</div>}
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label={<span>I accept the <Link to="/terms">terms and conditions</Link></span>}
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                    />
                </Form.Group>
                <br/>

                <Button id="registerBtn" variant="primary" type="submit" disabled={!acceptTerms || !isPasswordCorrect}>
                    Register
                </Button>
            </Form>

            <p>Already have an account?</p>
            <Link to="/loginPerformer">
                <Button variant="primary">Login</Button>
            </Link>

            {buttonClicked && (registered ? (
                <h3>Registered..redirecting</h3>
            ) : (
                <h3>{errorMessage}</h3>
            ))}
        </main-div>
    );
}
