import {useState, useEffect} from "react";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {getAllUsers} from "../api/Registration-Admin-Axios.jsx";

export default function AdminRegistrationHome() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then((response) => {
            setUsers(response.data);
        }).catch((error) => {
            console.error("not getting the users" + error);
        });
    }, []);


    return (
        <main className={'adminRegistrationHome'}>
            <h1>Users</h1>
            {users.map((user, index) => (
            <div key={index}>
                <Accordion >
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{user.username}</Accordion.Header>
                        <Accordion.Body>
                            <p>User id: {user.userId}</p>
                            <p>Username: {user.username}</p>
                            <p>Password: {user.password}</p>

                            <Link to={`/updateUser/${user.userId}`}>
                                <Button variant="primary">Update User</Button>
                            </Link>
                            <Link to={`/deleteUser/${user.userId}/`}>
                                <Button variant="danger">Delete User</Button>
                            </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        ))}
        </main>
    )
}