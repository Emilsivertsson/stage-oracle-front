import React from "react";
import {deleteManifestCast} from "../api/Production-Cast-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate,useParams} from "react-router-dom";

export default function DeleteCast() {
    const navigate = useNavigate();
    const {castId} = useParams();
    const {manifestId} = useParams();

    const handleDelete = async () => {
        await deleteManifestCast(castId);
        navigate("/castHome/" + manifestId);
    };

    return (
        <div>
            <h1>Delete Cast</h1>
            <h2>Are you sure you want to delete the Cast?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/castHome/" +manifestId)}>No</Button>
        </div>
    );
}