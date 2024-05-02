import {useState, useEffect, useContext} from "react";
import {getProductionsManifests} from "../api/Production-Manifests-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TodoModal from '../TodoModal.jsx';
import ButtonComponent from "../../components/ButtonComponent.jsx";
export default function ManifestHome() {

    const {globalState, updateGlobalState} = useContext(AppContext);
    const [manifests, setManifests] = useState([]);
    const [showTodoModal, setShowTodoModal] = useState(false);

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
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/productionHome" }}>Productions</Breadcrumb.Item>
                <Breadcrumb.Item active>Manifests</Breadcrumb.Item>
            </Breadcrumb>

            <ButtonComponent buttonText="Create new Manifest" linkPath="/createManifest" variant="primary"/>

            <Button variant="success" onClick={() => {
                setShowTodoModal(true);
            }}>Show Garments</Button>
            <TodoModal show={showTodoModal} onHide={() => setShowTodoModal(false)}/>

            <ButtonComponent buttonText="Back to Productions" linkPath="/productionHome" variant="primary"/>

            {manifests.map((manifest, index) => (
                <div key={index}>
                    <Accordion className="accordion-fixed-width" >
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