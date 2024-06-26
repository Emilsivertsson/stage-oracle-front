import {useContext, useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {createPerformer, getAllPerformersFromRegistry} from "../api/Production-Performers-Axios.jsx";
import PerformerModal from "./PerformerModal.jsx";
import {Button, ButtonToolbar} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AppContext from "../AppContext.jsx";
import ButtonComponent from "../../components/ButtonComponent.jsx";

export default function CreatePerformer() {

    const {globalState} = useContext(AppContext);
    const [performersFromRegistry, setPerformersFromRegistry] = useState([]);
    const [registryPerformerId, setRegistryPerformerId] = useState("");
    const [show, setShow] = useState(false);
    const [selectedPerformer, setSelectedPerformer] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        getAllPerformersFromRegistry(globalState.castId).then((response) => {
            setPerformersFromRegistry(response.data);
            console.log(response.data);
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
            <ButtonComponent buttonText="Back to Performers" linkPath="/performersHome" variant="primary"/>

            <Accordion>
                {performersFromRegistry.map((performer, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{performer.firstName + ' ' + performer.lastName}</Accordion.Header>
                        <Accordion.Body>
                            <p>Performer id: {performer.id}</p>
                            <p>Performer Firstname: {performer.firstName}</p>
                            <p>Performer Lastname: {performer.lastName}</p>

                            <Button variant="primary" onClick={() => {
                                setShow(true);
                                setSelectedPerformer(performer);
                            }}>Show Performer info</Button>
                            <PerformerModal show={show} onHide={() => setShow(false)} selectedPerformer={selectedPerformer}/>
                            <Button variant="primary" onClick={() => setRegistryPerformerId(performer.id) }>Select Performer</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    )
}