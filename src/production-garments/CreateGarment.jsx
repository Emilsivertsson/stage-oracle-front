import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {createGarment} from "../api/Production-Garments-Axios";
import {Form, Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";

export default function CreateCostume() {

    const {globalState} = useContext(AppContext);
    const [garment, setGarment] = useState({
        name: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;


        setGarment({
            ...garment,
            [name]: value
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(garment);
        createGarment(globalState.costumeId, garment).then((response) => {
            console.log(response);
            navigate("/garmentsHome");
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
                                  required={true}
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