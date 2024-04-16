import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {getOneProduction, updateProduction} from "../api/Production-productions-Axios.jsx";
import {Form, Button} from "react-bootstrap";


export default function UpdateProduction() {

    const [production, setProduction] = useState({});
    const {productionId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneProduction(productionId).then((response) => {
            setProduction(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, productionId]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setProduction({
            ...production,
            [name]: value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(production);
        updateProduction(productionId,production).then((response) => {
            console.log(response);
            navigate("/productionHome");
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <div>
            <h1>Update Production</h1>
            <Form onSubmit={handleUpdate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text"
                                  name="title"
                                  value={production.title}
                                  onChange={handleInputChange}
                                  placeholder="Enter Title"/>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text"
                                  name="year"
                                  value={production.year}
                                  onChange={handleInputChange}
                                  placeholder="Enter Year"/>
                    </Form.Group>
                    <br/>

                    <Form.Group controlId="formBasicInRotation">
                        <Form.Check
                            type="checkbox"
                            name="inRotation"
                            checked={production.inRotation}
                            onChange={handleInputChange}
                            label="In Rotation"
                        />
                    </Form.Group>
                <br/>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"
                                  name="description"
                                  value={production.description}
                                  onChange={handleInputChange}
                                  placeholder="Enter Description"/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Update Production
                </Button>
            </Form>
        </div>
    )


}