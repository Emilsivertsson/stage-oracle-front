import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {createManifestCast} from "../api/Production-Cast-Axios.jsx";
import {Form, Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";

export default function CreateCast() {

    const {globalState} = useContext(AppContext);
    const [cast, setCast] = useState({
        name: '',
    });
    const navigate = useNavigate();


    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setCast({
            ...cast,
            [name]: value
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(cast);
        createManifestCast(globalState.manifestId, cast).then((response) => {
            console.log(response);
            navigate("/castHome");
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Create Cast</h1>
            <Form onSubmit={handleCreate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="name"
                                  value={cast.name}
                                  required={true}
                                  onChange={handleInputChange}
                                  placeholder="Enter Name"/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Create Cast
                </Button>
            </Form>
        </div>
    )


}