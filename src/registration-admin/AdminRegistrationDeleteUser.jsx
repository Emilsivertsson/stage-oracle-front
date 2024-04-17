import React from "react";
import {Button} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {deleteUser} from "../api/Registration-Admin-Axios.jsx";

export default function AdminRegistrationDeleteUser() {
    const navigate = useNavigate();
    const {userId} = useParams();

    const handleDelete = async () => {
        await deleteUser(userId);
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