import {useContext, useEffect, useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import {getOneProductionManifest, updateProductionManifest} from "../api/Production-Manifests-Axios.jsx";
import {Form, Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";

export default function UpdateManifest() {

    const {globalState} = useContext(AppContext);
    const [manifest, setManifest] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getOneProductionManifest(globalState.manifestId).then((response) => {
            setManifest(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, globalState.manifestId]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setManifest({
            ...manifest,
            [name]: value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(manifest);
        updateProductionManifest(globalState.manifestId,manifest).then((response) => {
            console.log(response);
            navigate("/manifestHome");
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <div>
            <h1>Update Manifest</h1>
            <Form onSubmit={handleUpdate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text"
                                  name="title"
                                  value={manifest.title}
                                  required={true}
                                  onChange={handleInputChange}
                                  placeholder="Enter Title"/>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text"
                                  name="year"
                                  value={manifest.year}
                                  required={true}
                                  onChange={handleInputChange}
                                  placeholder="Enter Year"/>
                    </Form.Group>

                <br/>
                <Button variant="primary" type="submit">
                    Update Manifest
                </Button>
            </Form>
            <Link to="/manifestHome">
                <Button variant="primary">Back to Manifests</Button>
            </Link>
        </div>
    )


}