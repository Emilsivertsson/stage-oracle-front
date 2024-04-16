import React from "react";
import {deleteProductionManifest} from "../api/Production-Manifests-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate,useParams} from "react-router-dom";

export default function DeleteManifest() {
    const navigate = useNavigate();
    const {manifestId} = useParams();
    const {productionId} = useParams();

    const handleDelete = async () => {
        await deleteProductionManifest(manifestId);
        navigate("/manifestHome/" + productionId);
    };

    return (
        <div>
            <h1>Delete Manifest</h1>
            <h2>Are you sure you want to delete the manifest?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/manifestHome")}>No</Button>
        </div>
    );
}