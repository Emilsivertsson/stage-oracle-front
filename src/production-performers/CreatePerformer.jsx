import {useContext, useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {createPerformer, getAllPerformersFromRegistry} from "../api/Production-Performers-Axios.jsx";
import {Button} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AppContext from "../AppContext.jsx";


export default function CreatePerformer() {



    const {globalState} = useContext(AppContext);
    const [performersFromRegistry, setPerformersFromRegistry] = useState([]);
    const [registryPerformerId, setRegistryPerformerId] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        getAllPerformersFromRegistry(globalState.castId).then((response) => {
            setPerformersFromRegistry(response.data);
        }).catch((error) => {
            console.error(error);
        });
    } , [globalState.castId, navigate]);

    useEffect(() => {
        if (registryPerformerId !== "") {
            createPerformer(globalState.castId, registryPerformerId).then((response) => {
                console.log(response);
                navigate("/performersHome");
            }).catch((error) => {
                console.error(error);
            });
        }
    } , [globalState.castId, navigate, globalState.performerId, registryPerformerId]);


    return (
        <div>
            <h1>Performers from Registry</h1>
            <Link to="/performersHome">
                <Button variant="primary">Back to Performers</Button>
            </Link>
            <Accordion>
                {performersFromRegistry.map((performer, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{performer.firstName + ' ' + performer.lastName}</Accordion.Header>
                        <Accordion.Body>
                            <p>Performer id: {performer.id}</p>
                            <p>Performer Firstname: {performer.firstName}</p>
                            <p>Performer Lastname: {performer.lastName}</p>
                            <Button variant="primary" onClick={() => setRegistryPerformerId(performer.id) }>Select Performer</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

        </div>
    )
}