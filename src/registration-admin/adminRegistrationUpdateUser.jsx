import {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import {getOneUser, updateUser} from "../api/Registration-Admin-Axios.jsx";

export default function UpdateCostume() {

    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const {userId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneUser(userId).then((response) => {
            setUser(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, userId]);

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
        updateUser(userId,user).then((response) => {
            console.log(response);
            navigate("/adminHome");
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Update User</h1>
            <Form onSubmit={handleUpdate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"
                                  name="username"
                                  value={user.username}
                                  onChange={handleInputChange}
                                  placeholder="Enter Username"/>
                </Form.Group>

                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text"
                                  name="password"
                                  onChange={handleInputChange}
                                  placeholder="Enter new Password"/>
                </Form.Group>

                <br/>
                <Button variant="primary" type="submit">
                    Update User
                </Button>
            </Form>
            <Link to={`/adminHome`}>
                <Button variant="primary">Back </Button>
            </Link>
        </div>
    )


}