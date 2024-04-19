import {useContext} from "react";
import {deleteProductionManifest} from "../api/Production-Manifests-Axios.jsx";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import AppContext from "../AppContext.jsx";

export default function DeleteManifest() {

    const {globalState} = useContext(AppContext);
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteProductionManifest(globalState.manifestId);
        navigate("/manifestHome");
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