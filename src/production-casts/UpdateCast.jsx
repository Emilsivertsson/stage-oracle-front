import {useContext, useEffect, useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import {getOneManifestCast, updateManifestCast} from "../api/Production-Cast-Axios.jsx";
import {Form, Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";

export default function UpdateCast() {

    const {globalState} = useContext(AppContext);
    const [cast, setCast] = useState({
        name: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        getOneManifestCast(globalState.castId).then((response) => {
            setCast(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, globalState.castId]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setCast({
            ...cast,
            [name]: value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(cast);
        updateManifestCast(globalState.castId,cast).then((response) => {
            console.log(response);
            navigate("/castHome");
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <div>
            <h1>Update Cast</h1>
            <Form onSubmit={handleUpdate}>
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
                    Update Cast
                </Button>
            </Form>
            <Link to="/castHome">
                <Button variant="primary">Back to Cast</Button>
            </Link>
        </div>
    )


}