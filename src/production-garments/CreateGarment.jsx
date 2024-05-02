import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createGarment} from "../api/Production-Garments-Axios";
import {Form, Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";
import ButtonComponent from "../../components/ButtonComponent.jsx";

export default function CreateCostume() {

    const {globalState} = useContext(AppContext);
    const [garment, setGarment] = useState({
        name: '',
        description: '',
        isDone: false,
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
            <Form className="form" onSubmit={handleCreate}>
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

                <Form.Group controlId="formBasicInRotation">
                    <Form.Check
                        type="checkbox"
                        name="isDone"
                        checked={garment.isDone}
                        onChange={handleInputChange}
                        label="Is it Done?"
                    />
                </Form.Group>

                <br/>
                <Button variant="primary" type="submit">
                    Create Garment
                </Button>
            </Form>

            <ButtonComponent buttonText="Back to Garments" linkPath="/garmentsHome" variant="primary"/>

        </div>
    )


}