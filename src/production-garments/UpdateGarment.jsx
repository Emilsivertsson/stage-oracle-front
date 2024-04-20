import {useContext, useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {getOneGarment, updateGarment} from "../api/Production-Garments-Axios";
import {Form, Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";

export default function UpdateGarment() {

    const {globalState} = useContext(AppContext);
    const [garment, setGarment] = useState({
        name: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        getOneGarment(globalState.garmentId).then((response) => {
            setGarment(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, globalState.garmentId]);

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
        updateGarment(globalState.garmentId,garment).then((response) => {
            console.log(response);
            navigate("/garmentsHome");
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <div>
            <h1>Update Garment</h1>
            <Form className="form" onSubmit={handleUpdate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="name"
                                  value={garment.name}
                                  required={true}
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
            <Link to="/garmentsHome">
                <Button variant="primary">Back to Garments</Button>
            </Link>
        </div>
    )


}