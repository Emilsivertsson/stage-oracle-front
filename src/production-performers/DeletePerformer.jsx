import React from "react";
import {deletePerformer} from "../api/Production-Performers-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate,useParams} from "react-router-dom";

export default function DeletePerformer() {
    const navigate = useNavigate();
    const {performerId} = useParams();
    const {castId} = useParams();

    const handleDelete = async () => {
        await deletePerformer(performerId);
        navigate("/performersHome/" + castId);
    };

    return (
        <div>
            <h1>Delete Cast</h1>
            <h2>Are you sure you want to delete the Performer?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/performersHome/" +castId)}>No</Button>
        </div>
    );
}