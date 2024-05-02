import {useContext, useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {getOneProduction, updateProduction} from "../api/Production-productions-Axios.jsx";
import {Form, Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";
import ButtonComponent from "../../components/ButtonComponent.jsx";


export default function UpdateProduction() {


    const {globalState} = useContext(AppContext);
    const [production, setProduction] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        getOneProduction(globalState.productionId).then((response) => {
            setProduction(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, globalState.productionId]);

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
        updateProduction(globalState.productionId,production).then((response) => {
            console.log(response);
            navigate("/productionHome");
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <main-div>
            <h1>Update Production</h1>
            <Form className="form" onSubmit={handleUpdate}>
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

            <ButtonComponent buttonText="Back to Productions" linkPath="/productionHome" variant="primary"/>

        </main-div>
    )


}