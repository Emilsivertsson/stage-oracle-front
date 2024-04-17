import {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {getOneProductionManifest, updateProductionManifest} from "../api/Production-Manifests-Axios.jsx";
import {Form, Button} from "react-bootstrap";

export default function UpdateManifest() {

    const [manifest, setManifest] = useState({});
    const {manifestId} = useParams();
    const {productionId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneProductionManifest(manifestId).then((response) => {
            setManifest(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, manifestId]);

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
        updateProductionManifest(manifestId,manifest).then((response) => {
            console.log(response);
            navigate("/manifestHome/" + productionId);
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
                                  onChange={handleInputChange}
                                  placeholder="Enter Title"/>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text"
                                  name="year"
                                  value={manifest.year}
                                  onChange={handleInputChange}
                                  placeholder="Enter Year"/>
                    </Form.Group>

                <br/>
                <Button variant="primary" type="submit">
                    Update Manifest
                </Button>
            </Form>
            <Link to={`/manifestHome/${productionId}`}>
                <Button variant="primary">Back to Manifests</Button>
            </Link>
        </div>
    )


}