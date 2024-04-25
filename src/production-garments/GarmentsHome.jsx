import {useState, useEffect, useContext} from "react";
import {getAllCostumesGarments} from "../api/Production-Garments-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Badge, Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function GarmentsHome() {

    const {globalState,updateGlobalState} = useContext(AppContext);
    const [garments, setGarments] = useState([]);


    useEffect(() => {
        getAllCostumesGarments(globalState.costumeId).then((response) => {
            setGarments(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [globalState.costumeId]);

    const handleButtonClick = (garmentId) => {
        updateGlobalState({...globalState,garmentId: garmentId});
    }


    return (
        <main className={'garmentsHome'}>
            <h1>Garments</h1>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/productionHome" }}>Productions</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/manifestHome" }}>Manifests</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/castHome" }}>Casts</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/performersHome" }}>Performers</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/actsHome" }}>Acts</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/costumesHome" }}>Costumes</Breadcrumb.Item>
                <Breadcrumb.Item active>Garments</Breadcrumb.Item>
            </Breadcrumb>
            <Link to="/createGarment">
                <Button variant="primary">Create new Garment</Button>
            </Link>
            <Link to="/costumesHome">
                <Button variant="primary">Back to Costumes</Button>
            </Link>
            {garments.map((garment, index) => (
                <div key={index}>
                    <Accordion className="accordion-fixed-width" >
                        <Accordion.Item eventKey={index.toString()}>
                            <Accordion.Header>{garment.name}</Accordion.Header>
                            <Accordion.Body>
                                {garment.isDone ?
                                    <Badge id="garmentPill" pill bg="success">Done</Badge> :
                                    <Badge id="garmentPill" pill bg="danger">Not Done</Badge>
                                }
                                <p>Garment id: {garment.id}</p>
                                <p>Garment description: {garment.description}</p>

                                <Link to="/updateGarment">
                                    <Button variant="info" onClick={() => handleButtonClick(garment.id)}>Update Garment</Button>
                                </Link>
                                <Link to="/deleteGarment">
                                    <Button variant="danger" onClick={() => handleButtonClick(garment.id)}>Delete Garment</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}