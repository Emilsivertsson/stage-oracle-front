import {deleteAccount} from "../api/Registration-Perfomer-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
export default function DeleteAccount() {
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteAccount();
        navigate("/");
    };

    return (
        <div>
            <h1>Delete Account</h1>
            <p>Are you sure you want to delete your account?</p>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/performerHome")}>No</Button>
        </div>
    );
}