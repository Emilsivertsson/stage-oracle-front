import {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {getOneGarment, updateGarment} from "../api/Production-Garments-Axios";
import {Form, Button} from "react-bootstrap";

export default function UpdateGarment() {

    const [garment, setGarment] = useState({
        name: '',
    });
    const {garmentId} = useParams();
    const {costumeId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneGarment(garmentId).then((response) => {
            setGarment(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, garmentId]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setGarment({
            ...garment,
            [name]: value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(garment);
        updateGarment(garmentId,garment).then((response) => {
            console.log(response);
            navigate("/garmentsHome/" + costumeId);
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <div>
            <h1>Update Garment</h1>
            <Form onSubmit={handleUpdate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="name"
                                  value={garment.name}
                                  onChange={handleInputChange}
                                  placeholder="Enter Name"/>
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
                    Update Garment
                </Button>
            </Form>
            <Link to={"/garmentsHome/" + costumeId}>
                <Button variant="primary">Back to Garments</Button>
            </Link>
        </div>
    )


}