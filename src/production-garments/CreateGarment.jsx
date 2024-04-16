import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {createGarment} from "../api/Production-Garments-Axios";
import {Form, Button} from "react-bootstrap";


export default function CreateCostume() {

    const [garment, setGarment] = useState({
        name: '',
    });
    const navigate = useNavigate();
    const {costumeId} = useParams();

    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name === 'year') {
            value = Number(value);
        }

        setGarment({
            ...garment,
            [name]: value
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(garment);
        createGarment(costumeId, garment).then((response) => {
            console.log(response);
            navigate("/garmentsHome/" + costumeId);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Create Garment</h1>
            <Form onSubmit={handleCreate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="name"
                                  value={garment.name}
                                  onChange={handleInputChange}
                                  placeholder="Enter name"/>
                </Form.Group>

                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"
                                  name="description"
                                  value={garment.description}
                                  onChange={handleInputChange}
                                  placeholder="Enter Description"/>
                </Form.Group>

                <br/>
                <Button variant="primary" type="submit">
                    Create Costume
                </Button>
            </Form>
        </div>
    )


}