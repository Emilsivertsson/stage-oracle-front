import React from "react";
import {deleteAct} from "../api/Production-Acts-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate,useParams} from "react-router-dom";

export default function DeleteAct() {
    const navigate = useNavigate();
    const {actId} = useParams();
    const {performerId} = useParams();

    const handleDelete = async () => {
        await deleteAct(actId);
        navigate("/actsHome/" + performerId);
    };

    return (
        <div>
            <h1>Delete Cast</h1>
            <h2>Are you sure you want to delete the act?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/actsHome/" +performerId)}>No</Button>
        </div>
    );
}