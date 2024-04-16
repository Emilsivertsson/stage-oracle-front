import {useState, useEffect} from "react";
import {getAllCostumesGarments} from "../api/Production-Garments-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import {act} from "react-dom/test-utils";

export default function GarmentsHome() {

    const [garments, setGarments] = useState([]);
    const {costumeId} = useParams();

    useEffect(() => {
        getAllCostumesGarments(costumeId).then((response) => {
            setGarments(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [costumeId]);


    return (
        <main className={'garmentsHome'}>
            <h1>Garments</h1>
            <Link to={`/createGarment/${costumeId}`}>
                <Button variant="primary">Create new Costume</Button>
            </Link>
            {garments.map((garment, index) => (
                <div key={index}>
                    <Accordion >
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{garment.name}</Accordion.Header>
                            <Accordion.Body>
                                <p>Garment id: {garment.id}</p>
                                <p>Garment description: {garment.description}</p>

                                <Link to={`/updateGarment/${garment.id}/${costumeId}`}>
                                    <Button variant="info">Update Garment</Button>
                                </Link>
                                <Link to={`/deleteGarment/${garment.id}/${costumeId}`}>
                                    <Button variant="danger">Delete Garment</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}