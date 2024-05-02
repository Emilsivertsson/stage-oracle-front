import {useContext} from "react";
import {deleteProduction} from "../api/Production-productions-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import AppContext from "../AppContext.jsx";

export default function DeleteProduction() {

    const {globalState} = useContext(AppContext);
    const navigate = useNavigate();


    const handleDelete = async () => {
        await deleteProduction(globalState.productionId);
        navigate("/productionHome");
    };

    return (
        <div>
            <h1>Delete Production</h1>
            <p>Are you sure you want to delete the production?</p>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/productionHome")}>No</Button>
        </div>
    );
}