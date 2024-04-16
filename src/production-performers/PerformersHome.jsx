import {useState, useEffect} from "react";
import {getAllCastsPerformers} from "../api/Production-Performers-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function PerformersHome() {

    const [performers, setPerformers] = useState([]);
    const {castId} = useParams();

    useEffect(() => {
        getAllCastsPerformers(castId).then((response) => {
            setPerformers(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [castId]);


    return (
        <main className={'performersHome'}>
            <h1>Casts</h1>
            <Link to={`/createPerformer/${castId}`}>
                <Button variant="primary">Create new Performer</Button>
            </Link>{performers.map((cast, index) => (
                <div key={index}>
                    <Accordion >
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{performers.firstName + performers.lastName}</Accordion.Header>
                            <Accordion.Body>
                                <p>Performer id: {performers.id}</p>
                                <p>Performer Firstname: {performers.firstName}</p>
                                <p>Performer Lastname: {performers.lastName}</p>


                                <Link to={`/acts/${performers.id}`}>
                                    <Button variant="primary">View Performers Acts</Button>
                                </Link>
                                <Link to={`/deletePerformer/${performers.id}/${castId}`}>
                                    <Button variant="danger">Delete Cast</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}