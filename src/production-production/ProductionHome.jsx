import {useState, useEffect} from "react";
import {getAllProductions} from "../api/Production-productions-Axios.jsx";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function ProductionHome() {

    const [productions, setProductions] = useState([]);

    useEffect(() => {
        getAllProductions().then((response) => {
            setProductions(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);


    return (
        <main className={'productionHome'}>
            <h1>All Productions</h1>
            <Link to={"/createProduction"}>
                <Button variant="primary">Register Production</Button>
            </Link>
            {productions.map((production, index) => (
                <div key={index}>
                    <Accordion >
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{production.title}</Accordion.Header>
                            <Accordion.Body>
                                <p>Production id: {production.id}</p>
                                <p>Production year:{production.year}</p>
                                <p>In Rotation: {production.inRotation.toString()}</p>
                                <p>Description: {production.description}</p>

                                <Link to={`/manifestHome/${production.id}`}>
                                    <Button variant="primary">View Productions Manifests</Button>
                                </Link>
                                <Link to={`/updateProduction/${production.id}`}>
                                    <Button variant="info">Update Production</Button>
                                </Link>
                                <Link to={`/deleteProduction/${production.id}`}>
                                    <Button variant="danger">Delete Production</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}