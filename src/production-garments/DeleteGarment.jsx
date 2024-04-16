import React from "react";
import {deleteGarment} from "../api/Production-Garments-Axios";
import {Button} from "react-bootstrap";
import {useNavigate,useParams} from "react-router-dom";

export default function DeleteGarment() {
    const navigate = useNavigate();
    const {garmentId} = useParams();
    const {costumeId} = useParams();

    const handleDelete = async () => {
        await deleteGarment(garmentId);
        navigate("/garmentsHome/" + costumeId);
    };

    return (
        <div>
            <h1>Delete Garment</h1>
            <h2>Are you sure you want to delete the Garment?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/garmentsHome/" +costumeId)}>No</Button>
        </div>
    );
}