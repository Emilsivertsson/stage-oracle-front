import React from "react";
import {deleteProduction} from "../api/Production-productions-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate,useParams} from "react-router-dom";

export default function DeleteProduction() {
    const navigate = useNavigate();
    const {productionId} = useParams();

    const handleDelete = async () => {
        await deleteProduction(productionId);
        navigate("/productionHome");
    };

    return (
        <div>
            <h1>Delete Production</h1>
            <h2>Are you sure you want to delete the production?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/productionHome")}>No</Button>
        </div>
    );
}