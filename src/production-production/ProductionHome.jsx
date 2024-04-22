import {useEffect, useState, useContext} from "react";
import {getAllProductions} from "../api/Production-productions-Axios.jsx";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";

export default function ProductionHome() {

    const {globalState, updateGlobalState} = useContext(AppContext);
    const [productions, setProductions] = useState([]);

    useEffect(() => {
        getAllProductions().then((response) => {
            setProductions(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);


    const handleButtonClick = (productionId) => {
         updateGlobalState({...globalState,productionId: productionId});
    }


    return (
        <main className={'productionHome'}>


            <h1>All Productions</h1>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Productions</Breadcrumb.Item>
            </Breadcrumb>

            <Link to="/createProduction">
                <Button variant="primary">Register Production</Button>
            </Link>
            {productions.map((production, index) => (
                <div key={index}>
                    <Accordion className="accordion-fixed-width" >
                        <Accordion.Item eventKey={index.toString()}>
                            <Accordion.Header>{production.title}</Accordion.Header>
                            <Accordion.Body>
                                <p>Production id: {production.id}</p>
                                <p>Production year:{production.year}</p>
                                <p>In Rotation: {production.inRotation.toString()}</p>
                                <p>Description: {production.description}</p>

                                <Link to="/manifestHome">
                                    <Button variant="primary" onClick={() => handleButtonClick(production.id)}>View Productions Manifests</Button>
                                </Link>
                                <Link to="/updateProduction">
                                    <Button variant="info" onClick={() => handleButtonClick(production.id)}>Update Production</Button>
                                </Link>
                                <Link to="/deleteProduction">
                                    <Button variant="danger" onClick={() => handleButtonClick(production.id)}>Delete Production</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}