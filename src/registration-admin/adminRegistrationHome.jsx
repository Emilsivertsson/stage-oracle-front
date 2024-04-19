import {useState, useEffect, useContext} from "react";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {getAllUsers} from "../api/Registration-Admin-Axios.jsx";
import AppContext from "../AppContext.jsx";

export default function AdminRegistrationHome() {

    const {globalState, updateGlobalState} = useContext(AppContext)
    const [users, setUsers] = useState([]);


    useEffect(() => {
        getAllUsers().then((response) => {
            setUsers(response.data);
        }).catch((error) => {
            console.error("not getting the users" + error);
        });
    }, []);

    const handleButtonClick = (userId) => {
        updateGlobalState({...globalState,userId: userId});
        console.log(globalState.userId);
    }


    return (
        <main className={'adminRegistrationHome'}>
            <h1>Users</h1>
            {users.map((user, index) => (
            <div key={index}>
                <Accordion className="accordion-fixed-width" >
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{user.username}</Accordion.Header>
                        <Accordion.Body>
                            <p>User id: {user.userId}</p>
                            <p>Username: {user.username}</p>
                            <p>Password: {user.password}</p>

                            <Link to="/updateUser">
                                <Button variant="primary" onClick={() => handleButtonClick(user.userId)}>Update User</Button>
                            </Link>
                            <Link to="/deleteUser">
                                <Button variant="danger" onClick={() => handleButtonClick(user.userId)}>Delete User</Button>
                            </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        ))}
        </main>
    )
}