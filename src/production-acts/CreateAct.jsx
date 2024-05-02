import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createAct} from "../api/Production-Acts-Axios.jsx";
import {Form, Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";
import ButtonComponent from "../../components/ButtonComponent.jsx";


export default function CreateAct() {

    const {globalState} = useContext(AppContext);
    const [act, setAct] = useState({
        title: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setAct({
            ...act,
            [name]: value
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(act);
        createAct(globalState.performerId, act).then((response) => {
            console.log(response);
            navigate("/actsHome");
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Create Act</h1>
            <Form className="form" onSubmit={handleCreate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="title"
                                  value={act.name}
                                  required={true}
                                  onChange={handleInputChange}
                                  placeholder="Enter title"/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Create Act
                </Button>

                <ButtonComponent buttonText="Back" linkPath="/actsHome" variant="primary"/>

            </Form>
        </div>
    )


}