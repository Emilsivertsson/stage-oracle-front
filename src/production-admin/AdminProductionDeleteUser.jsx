import  {useContext} from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {deleteUser} from "../api/Production-Admin-Axios.jsx";
import AppContext from "../AppContext.jsx";

export default function AdminProductionDeleteUser() {

    const {globalState} = useContext(AppContext);
    const navigate = useNavigate();


    const handleDelete = async () => {
        await deleteUser(globalState.userId);
        navigate("/adminProductionHome");
    };

    return (
        <div>
            <h1>Delete User</h1>
            <h2>Are you sure you want to delete the User?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/adminProductionHome")}>No</Button>
        </div>
    );
}