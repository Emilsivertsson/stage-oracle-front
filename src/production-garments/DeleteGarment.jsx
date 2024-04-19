import  {useContext} from "react";
import {deleteGarment} from "../api/Production-Garments-Axios";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import AppContext from "../AppContext.jsx";

export default function DeleteGarment() {

    const {globalState} = useContext(AppContext);
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteGarment(globalState.garmentId);
        navigate("/garmentsHome");
    };

    return (
        <div>
            <h1>Delete Garment</h1>
            <h2>Are you sure you want to delete the Garment?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/garmentsHome")}>No</Button>
        </div>
    );
}