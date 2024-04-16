import {useState, useEffect} from "react";
import {getProductionsManifests} from "../api/Production-Manifests-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function ManifestHome() {

    const [manifests, setManifests] = useState([]);
    const {productionId} = useParams();

    useEffect(() => {
        getProductionsManifests(productionId).then((response) => {
            setManifests(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [productionId]);


    return (
        <main className={'manifestHome'}>
            <h1>Manifests</h1>
            <Link to={`/createManifest/${productionId}`}>
                <Button variant="primary">Create new Manifest</Button>
            </Link>
            {manifests.map((manifest, index) => (
                <div key={index}>
                    <Accordion >
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{manifest.title}</Accordion.Header>
                            <Accordion.Body>
                                <p>Manifest id: {manifest.id}</p>
                                <p>Manifest year:{manifest.year}</p>

                                <Link to={`/castHome/${manifest.id}`}>
                                    <Button variant="primary">View Manifest Casts</Button>
                                </Link>
                                <Link to={`/updateManifest/${manifest.id}/${productionId}`}>
                                    <Button variant="info">Update Manifest</Button>
                                </Link>
                                <Link to={`/deleteManifest/${manifest.id}/${productionId}`}>
                                    <Button variant="danger">Delete Manifest</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}