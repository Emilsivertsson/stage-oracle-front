import {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {getOneAct, updateAct} from "../api/Production-Acts-Axios.jsx";
import {Form, Button} from "react-bootstrap";

export default function UpdateAct() {

    const [act, setAct] = useState({
        title: '',
    });
    const {actId} = useParams();
    const {performerId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneAct(actId).then((response) => {
            setAct(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, actId]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setAct({
            ...act,
            [name]: value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(act);
        updateAct(actId,act).then((response) => {
            console.log(response);
            navigate("/actsHome/" + performerId);
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <div>
            <h1>Update Act</h1>
            <Form onSubmit={handleUpdate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="title"
                                  value={act.title}
                                  onChange={handleInputChange}
                                  placeholder="Enter Title"/>
                </Form.Group>

                <br/>
                <Button variant="primary" type="submit">
                    Update Act
                </Button>
            </Form>
            <Link to={`/actsHome/${performerId}`}>
                <Button variant="primary">Back to Acts</Button>
            </Link>
        </div>
    )


}