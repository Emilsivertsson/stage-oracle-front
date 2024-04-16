import React from "react";
import {deleteCostume} from "../api/Production-Costumes-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate,useParams} from "react-router-dom";

export default function DeleteCostume() {
    const navigate = useNavigate();
    const {costumeId} = useParams();
    const {actId} = useParams();

    const handleDelete = async () => {
        await deleteCostume(costumeId);
        navigate("/costumesHome/" + actId);
    };

    return (
        <div>
            <h1>Delete Costume</h1>
            <h2>Are you sure you want to delete the Costume?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/costumesHome/" +actId)}>No</Button>
        </div>
    );
}