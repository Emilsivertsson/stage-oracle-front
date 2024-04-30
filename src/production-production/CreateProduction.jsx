import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createProduction} from "../api/Production-productions-Axios.jsx";
import {Form, Button} from "react-bootstrap";


export default function CreateProduction() {

    const [production, setProduction] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name === 'year') {
            value = Number(value);
        }

        setProduction({
            ...production,
            [name]: value
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(production);
        if(production.inRotation === undefined){
            production.inRotation = false;
        }
        createProduction(production).then((response) => {
            console.log(response);
            navigate("/productionHome");
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <div>
            <h1>Create Production</h1>
            <Form className="form" onSubmit={handleCreate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text"
                                  name="title"
                                  required={true}
                                  value={production.title}
                                  onChange={handleInputChange}
                                  placeholder="Enter Title"/>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text"
                                  name="year"
                                  required={true}
                                  value={production.year}
                                  onChange={handleInputChange}
                                  placeholder="Enter Year"/>
                </Form.Group>
                <br/>

                <Form.Group controlId="formBasicInRotation">
                    <Form.Check
                        type="checkbox"
                        name="inRotation"
                        onChange={handleInputChange}
                        label="In Rotation"
                    />
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"
                                  name="description"
                                  onChange={handleInputChange}
                                  placeholder="Enter Description"/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Create Production
                </Button>
            </Form>
            <Link to="/productionHome">
                <Button variant="primary">Back</Button>
            </Link>
        </div>
    )


}