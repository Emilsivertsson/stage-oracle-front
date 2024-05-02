import  {useContext} from "react";
import {deleteAct} from "../api/Production-Acts-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import AppContext from "../AppContext.jsx";

export default function DeleteAct() {

    const {globalState} = useContext(AppContext);
    const navigate = useNavigate();


    const handleDelete = async () => {
        await deleteAct(globalState.actId);
        navigate("/actsHome" );
    };

    return (
        <div>
            <h1>Delete Cast</h1>
            <p>Are you sure you want to delete the act?</p>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/actsHome")}>No</Button>
        </div>
    );
}