import {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {createPerformer, getAllPerformersFromRegistry} from "../api/Production-Performers-Axios.jsx";
import {Button} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";


export default function CreatePerformer() {

    const [performersFromRegistry, setPerformersFromRegistry] = useState([]);
    const [performerId, setPerformerId] = useState("");
    const navigate = useNavigate();
    const {castId} = useParams();

    useEffect(() => {
        getAllPerformersFromRegistry(castId).then((response) => {
            setPerformersFromRegistry(response.data);
        }).catch((error) => {
            console.error(error);
        });
    } , [castId, navigate]);

    useEffect(() => {
        if (performerId !== "") {
            createPerformer(castId, performerId).then((response) => {
                console.log(response);
                navigate("/performersHome/" + castId);
            }).catch((error) => {
                console.error(error);
            });
        }
    } , [castId, navigate, performerId]);

    return (
        <div>
            <h1>Performers from Registry</h1>
            <Link to={`/performersHome/${castId}`}>
                <Button variant="primary">Back to Performers</Button>
            </Link>
            <Accordion>
                {performersFromRegistry.map((performer, index) => (
                    <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{performer.firstName + ' ' + performer.lastName}</Accordion.Header>
                        <Accordion.Body>
                            <p>Performer id: {performer.id}</p>
                            <p>Performer Firstname: {performer.firstName}</p>
                            <p>Performer Lastname: {performer.lastName}</p>
                            <Button variant="primary" onClick={() => setPerformerId(performer.id) }>Select Performer</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

        </div>
    )
}