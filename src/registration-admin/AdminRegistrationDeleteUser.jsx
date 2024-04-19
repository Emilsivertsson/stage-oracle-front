import {useContext} from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {deleteUser} from "../api/Registration-Admin-Axios.jsx";
import AppContext from "../AppContext.jsx";

export default function AdminRegistrationDeleteUser() {

    const {globalState} = useContext(AppContext)
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteUser(globalState.userId);
        navigate("/adminHome");
    };

    return (
        <div>
            <h1>Delete User</h1>
            <h2>Are you sure you want to delete the User?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/adminHome")}>No</Button>
        </div>
    );
}