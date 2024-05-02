import  {useContext} from "react";
import {deleteManifestCast} from "../api/Production-Cast-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import AppContext from "../AppContext.jsx";

export default function DeleteCast() {

    const {globalState} = useContext(AppContext);
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteManifestCast(globalState.castId);
        navigate("/castHome" );
    };

    return (
        <div>
            <h1>Delete Cast</h1>
            <p>Are you sure you want to delete the Cast?</p>
            <Button variant="danger" onClick={handleDelete}>Yes</Button>
            <Button variant="primary" onClick={() => navigate("/castHome")}>No</Button>
        </div>
    );
}