import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {createManifestCast} from "../api/Production-Cast-Axios.jsx";
import {Form, Button} from "react-bootstrap";


export default function CreateCast() {

    const [cast, setCast] = useState({
        name: '',
    });
    const navigate = useNavigate();
    const {manifestId} = useParams();

    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name === 'year') {
            value = Number(value);
        }

        setCast({
            ...cast,
            [name]: value
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(cast);
        createManifestCast(manifestId, cast).then((response) => {
            console.log(response);
            navigate("/castHome/" + manifestId);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Create Cast</h1>
            <Form onSubmit={handleCreate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="name"
                                  value={cast.name}
                                  onChange={handleInputChange}
                                  placeholder="Enter Name"/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Create Cast
                </Button>
            </Form>
        </div>
    )


}