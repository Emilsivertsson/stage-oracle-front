import { useEffect, useState } from "react";
import { getOnePerformer, updatePerformerMeasurements } from "../api/Registration-Perfomer-Axios.jsx"; // Ensure these functions are defined in your API utility
import {Link, useNavigate} from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function UpdatePerformerMeasurements() {
    const navigate = useNavigate();
    const [isCorrectInput, setCorrectInput] = useState(true)

    const [measurements, setMeasurements] = useState({
    "measurements": {
        "height": 0,
        "shoeSize": 0,
        "jacketSize": 0,
        "pantSize": 0,
        "head": 0
    }
    });

    async function handleSubmit(e) {
        e.preventDefault();
        setCorrectInput(true);

        try {
            const result = await updatePerformerMeasurements(measurements.measurements);
            console.log(result);
            navigate("/performerHome");
        } catch (error) {
            console.log(error);
            setCorrectInput(false);
        }
    }

    useEffect(() => {
        const fetchMeasurements = async () => {
            const result = await getOnePerformer();
            if (result.success) {
                setMeasurements(result.data);
            }
        };
        fetchMeasurements();
    }, []);

    return (
        <div>
            <h1 className="text-center">Update Measurements</h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formBasicHeight">
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number"
                                    name="height"
                                    value={measurements.measurements.height}
                                    onChange={(e) => setMeasurements({measurements: {...measurements.measurements, height: Number(e.target.value)}})}
                                    placeholder="Enter height"/>
                </Form.Group>
                <Form.Group controlId="formBasicShoeSize">
                    <Form.Label>Shoe Size</Form.Label>
                    <Form.Control type="number"
                                    name="shoeSize"
                                    value={measurements.measurements.shoeSize}
                                    onChange={(e) => setMeasurements({measurements: {...measurements.measurements, shoeSize: Number(e.target.value)}})}
                                    placeholder="Enter shoe size"/>
                </Form.Group>
                <Form.Group controlId="formBasicJacketSize">
                    <Form.Label>Jacket Size</Form.Label>
                    <Form.Control type="number"
                                    name="jacketSize"
                                    value={measurements.measurements.jacketSize}
                                    onChange={(e) => setMeasurements({measurements: {...measurements.measurements, jacketSize: Number(e.target.value)}})}
                                    placeholder="Enter jacket size"/>
                </Form.Group>
                <Form.Group controlId="formBasicPantSize">
                    <Form.Label>Pant Size</Form.Label>
                    <Form.Control type="number"
                                    name="pantSize"
                                    value={measurements.measurements.pantSize}
                                    onChange={(e) => setMeasurements({measurements: {...measurements.measurements, pantSize: Number(e.target.value)}})}
                                    placeholder="Enter pant size"/>
                </Form.Group>
                <Form.Group controlId="formBasicHead">
                    <Form.Label>Head</Form.Label>
                    <Form.Control type="number"
                                    name="head"
                                    value={measurements.measurements.head}
                                    onChange={(e) => setMeasurements({measurements: {...measurements.measurements, head: Number(e.target.value)}})}
                                    placeholder="Enter head size"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
            <Link to="/performerHome">
                <Button variant="primary">Back</Button>
            </Link>

            {!isCorrectInput && (
                <h3>Incorrect input, please try again</h3>
            )}
        </div>
    );
}
