import {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {getOneCostume, updateCostume} from "../api/Production-Costumes-Axios";
import {Form, Button} from "react-bootstrap";

export default function UpdateCostume() {

    const [costume, setCostume] = useState({
        name: '',
    });
    const {costumeId} = useParams();
    const {actId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneCostume(costumeId).then((response) => {
            setCostume(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, costumeId]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setCostume({
            ...costume,
            [name]: value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(costume);
        updateCostume(costumeId,costume).then((response) => {
            console.log(response);
            navigate("/costumesHome/" + actId);
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <div>
            <h1>Update Costume</h1>
            <Form onSubmit={handleUpdate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="name"
                                  value={costume.name}
                                  onChange={handleInputChange}
                                  placeholder="Enter Name"/>
                </Form.Group>

                <br/>
                <Button variant="primary" type="submit">
                    Update Costume
                </Button>
            </Form>
            <Link to={`/costumesHome/${actId}`}>
                <Button variant="primary">Back to Costumes</Button>
            </Link>
        </div>
    )


}