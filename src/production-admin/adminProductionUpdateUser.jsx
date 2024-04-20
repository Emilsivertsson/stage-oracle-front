import {useContext, useEffect, useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import {getOneUser, updateUser} from "../api/Production-Admin-Axios.jsx";
import AppContext from "../AppContext.jsx";

export default function UpdateCostume() {

    const {globalState} = useContext(AppContext);
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        getOneUser(globalState.userId).then((response) => {
            setUser(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, globalState.userId]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(user);
        updateUser(globalState.userId,user).then((response) => {
            console.log(response);
            navigate("/adminProductionHome");
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Update User</h1>
            <Form className="form" onSubmit={handleUpdate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"
                                  name="username"
                                  value={user.username}
                                  required={true}
                                  onChange={handleInputChange}
                                  placeholder="Enter Username"/>
                </Form.Group>

                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text"
                                  name="password"
                                  required={true}
                                  onChange={handleInputChange}
                                  placeholder="Enter new Password"/>
                </Form.Group>

                <br/>
                <Button variant="primary" type="submit">
                    Update User
                </Button>
            </Form>
            <Link to="/adminProductionHome">
                <Button variant="primary">Back </Button>
            </Link>
        </div>
    )


}