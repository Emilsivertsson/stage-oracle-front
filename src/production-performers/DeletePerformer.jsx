import {useContext} from "react";
import {deletePerformer} from "../api/Production-Performers-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import AppContext from "../AppContext.jsx";

export default function DeletePerformer() {

    const {globalState } = useContext(AppContext);
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deletePerformer(globalState.performerId);
        navigate("/performersHome");
    };

    return (
        <div>
            <h1>Delete Performer</h1>
            <p>Are you sure you want to delete the Performer?</p>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/performersHome" )}>No</Button>
        </div>
    );
}