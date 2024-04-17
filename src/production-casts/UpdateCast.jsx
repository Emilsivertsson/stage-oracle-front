import {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {getOneManifestCast, updateManifestCast} from "../api/Production-Cast-Axios.jsx";
import {Form, Button} from "react-bootstrap";

export default function UpdateCast() {

    const [cast, setCast] = useState({
        name: '',
    });
    const {castId} = useParams();
    const {manifestId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneManifestCast(castId).then((response) => {
            setCast(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, castId]);

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
        updateManifestCast(castId,cast).then((response) => {
            console.log(response);
            navigate("/castHome/" + manifestId);
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
                                  onChange={handleInputChange}
                                  placeholder="Enter Name"/>
                </Form.Group>

                <br/>
                <Button variant="primary" type="submit">
                    Update Cast
                </Button>
            </Form>
            <Link to={`/castHome/${manifestId}`}>
                <Button variant="primary">Back to Cast</Button>
            </Link>
        </div>
    )


}