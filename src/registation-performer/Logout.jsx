import React from "react";
import {logoutPerformer} from "../api/Perfomer-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    const handleDelete = async () => {
        await logoutPerformer();
        navigate("/");
    };

    return (
        <div>
            <h1>Log out</h1>
            <h2>Are you sure you want to logout from your account?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/performerHome")}>No</Button>
        </div>
    );
}