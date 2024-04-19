import {useContext} from "react";
import {deleteCostume} from "../api/Production-Costumes-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import AppContext from "../AppContext.jsx";

export default function DeleteCostume() {

    const {globalState} = useContext(AppContext);
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteCostume(globalState.costumeId);
        navigate("/costumesHome");
    };

    return (
        <div>
            <h1>Delete Costume</h1>
            <h2>Are you sure you want to delete the Costume?</h2>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/costumesHome")}>No</Button>
        </div>
    );
}