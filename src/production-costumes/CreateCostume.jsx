import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createCostume} from "../api/Production-Costumes-Axios";
import {Form, Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";

export default function CreateCostume() {

    const {globalState} = useContext(AppContext);
    const [costume, setCostume] = useState({
        name: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;


        setCostume({
            ...costume,
            [name]: value
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(costume);
        createCostume(globalState.actId, costume).then((response) => {
            console.log(response);
            navigate("/costumesHome");
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Create Costume</h1>
            <Form className="form" onSubmit={handleCreate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="name"
                                  value={costume.name}
                                  required={true}
                                  onChange={handleInputChange}
                                  placeholder="Enter name"/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Create Costume
                </Button>
                <Link to="/costumesHome">
                    <Button variant="primary">Back</Button>
                </Link>
            </Form>
        </div>
    )


}