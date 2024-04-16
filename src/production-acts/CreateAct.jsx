import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {createAct} from "../api/Production-Acts-Axios.jsx";
import {Form, Button} from "react-bootstrap";


export default function CreateAct() {

    const [act, setAct] = useState({
        title: '',
    });
    const navigate = useNavigate();
    const {performerId} = useParams();

    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name === 'year') {
            value = Number(value);
        }

        setAct({
            ...act,
            [name]: value
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(act);
        createAct(performerId, act).then((response) => {
            console.log(response);
            navigate("/actsHome/" + performerId);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Create Act</h1>
            <Form onSubmit={handleCreate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="title"
                                  value={act.name}
                                  onChange={handleInputChange}
                                  placeholder="Enter title"/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Create Act
                </Button>
            </Form>
        </div>
    )


}