import {useState, useEffect} from "react";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {getAllUsers} from "../api/Production-Admin-Axios.jsx";

export default function AdminProductionHome() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then((response) => {
            setUsers(response.data);
        }).catch((error) => {
            console.error("not getting the users" + error);
        });
    }, []);


    return (
        <main className={'adminProductionHome'}>
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

                            <Link to={`/updateProductionUser/${user.userId}`}>
                                <Button variant="primary">Update User</Button>
                            </Link>
                            <Link to={`/deleteProductionUser/${user.userId}/`}>
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