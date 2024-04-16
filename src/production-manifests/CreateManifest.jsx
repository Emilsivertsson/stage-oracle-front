import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {createProductionManifest} from "../api/Production-Manifests-Axios.jsx";
import {Form, Button} from "react-bootstrap";


export default function CreateManifest() {

    const [manifest, setManifest] = useState({
        title: '',
        year: '',
    });
    const navigate = useNavigate();
    const {productionId} = useParams();

    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name === 'year') {
            value = Number(value);
        }

        setManifest({
            ...manifest,
            [name]: value
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(manifest);
        createProductionManifest(productionId, manifest).then((response) => {
            console.log(response);
            navigate("/manifestHome/" + productionId);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Create Manifest</h1>
            <Form onSubmit={handleCreate}>
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
                    <Form.Control type="number"
                                  name="year"
                                  value={manifest.year}
                                  onChange={handleInputChange}
                                  placeholder="Enter Year"/>
                </Form.Group>

                <br/>
                <Button variant="primary" type="submit">
                    Create Manifest
                </Button>
            </Form>
        </div>
    )


}