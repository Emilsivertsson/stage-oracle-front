import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {createCostume} from "../api/Production-Costumes-Axios";
import {Form, Button} from "react-bootstrap";


export default function CreateCostume() {

    const [costume, setCostume] = useState({
        name: '',
    });
    const navigate = useNavigate();
    const {actId} = useParams();

    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name === 'year') {
            value = Number(value);
        }

        setCostume({
            ...costume,
            [name]: value
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(costume);
        createCostume(actId, costume).then((response) => {
            console.log(response);
            navigate("/costumesHome/" + actId);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Create Costume</h1>
            <Form onSubmit={handleCreate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="name"
                                  value={costume.name}
                                  onChange={handleInputChange}
                                  placeholder="Enter name"/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Create Costume
                </Button>
            </Form>
        </div>
    )


}