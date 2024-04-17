import {useState, useEffect} from "react";
import {getAllActsCostumes} from "../api/Production-Costumes-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import {act} from "react-dom/test-utils";

export default function CostumesHome() {

    const [costumes, setCostumes] = useState([]);
    const {actId} = useParams();

    useEffect(() => {
        getAllActsCostumes(actId).then((response) => {
            setCostumes(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [actId]);


    return (
        <main className={'costumesHome'}>
            <h1>Costumes</h1>
            <Link to={`/createCostume/${actId}`}>
                <Button variant="primary">Create new Costume</Button>
            </Link>
            <Link to={`/actsHome/${actId}`}>
                <Button variant="primary">Back to Acts</Button>
            </Link>
            {costumes.map((costume, index) => (
                <div key={index}>
                    <Accordion >
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{costume.name}</Accordion.Header>
                            <Accordion.Body>
                                <p>Costume id: {costume.id}</p>

                                <Link to={`/garmentsHome/${costume.id}`}>
                                    <Button variant="primary">View Costumes Garments</Button>
                                </Link>
                                <Link to={`/updateCostume/${costume.id}/${actId}`}>
                                    <Button variant="info">Update Costume</Button>
                                </Link>
                                <Link to={`/deleteCostume/${costume.id}/${actId}`}>
                                    <Button variant="danger">Delete Costume</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}