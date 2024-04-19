import {useState, useEffect, useContext} from "react";
import {getProductionsManifests} from "../api/Production-Manifests-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";

export default function ManifestHome() {

    const {globalState, updateGlobalState} = useContext(AppContext);
    const [manifests, setManifests] = useState([]);

    useEffect(() => {
        getProductionsManifests(globalState.productionId).then((response) => {
            setManifests(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [globalState.productionId]);

    const handleButtonClick = (manifestId) => {
        updateGlobalState({...globalState, manifestId: manifestId});
    }


    return (
        <main className={'manifestHome'}>
            <h1>Manifests</h1>
            <Link to="/createManifest">
                <Button variant="primary">Create new Manifest</Button>
            </Link>
            <Link to="/productionHome">
                <Button variant="primary">Back to Productions</Button>
            </Link>
            {manifests.map((manifest, index) => (
                <div key={index}>
                    <Accordion >
                        <Accordion.Item eventKey={index.toString()}>
                            <Accordion.Header>{manifest.title}</Accordion.Header>
                            <Accordion.Body>
                                <p>Manifest id: {manifest.id}</p>
                                <p>Manifest year:{manifest.year}</p>

                                <Link to={`/castHome`}>
                                    <Button variant="primary" onClick={() => handleButtonClick(manifest.id)}>View Cast</Button>
                                </Link>
                                <Link to={`/updateManifest`}>
                                    <Button variant="info" onClick={() => handleButtonClick(manifest.id)}>Update Manifest</Button>
                                </Link>
                                <Link to={`/deleteManifest`}>
                                    <Button variant="danger" onClick={() => handleButtonClick(manifest.id)}>Delete Manifest</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}