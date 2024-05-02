import {useState, useEffect, useContext} from "react";
import {getAllManifestCasts} from "../api/Production-Cast-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TodoModal from '../TodoModal.jsx';
import ButtonComponent from "../../components/ButtonComponent.jsx";

export default function CastHome() {

    const {globalState, updateGlobalState} = useContext(AppContext);
    const [casts, setCasts] = useState([]);
    const [showTodoModal, setShowTodoModal] = useState(false);

    useEffect(() => {
        getAllManifestCasts(globalState.manifestId).then((response) => {
            setCasts(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [globalState.manifestId]);

    const handleButtonClick = (castId) => {
        updateGlobalState({...globalState,castId: castId});
    }




    return (
        <main className={'castHome'}>
            <h1>Casts</h1>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/productionHome" }}>Productions</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/manifestHome" }}>Manifests</Breadcrumb.Item>
                <Breadcrumb.Item active>Casts</Breadcrumb.Item>
            </Breadcrumb>

            <ButtonComponent buttonText="Create new Cast" linkPath="/createCast" variant="primary"/>

            <Button variant="success" onClick={() => {
                setShowTodoModal(true);
            }}>Show Garments</Button>
            <TodoModal show={showTodoModal} onHide={() => setShowTodoModal(false)}/>

            <ButtonComponent buttonText="Back to Manifests" linkPath="/manifestHome" variant="primary"/>

            {casts.map((cast, index) => (
                <div key={index}>
                    <Accordion className="accordion-fixed-width">
                        <Accordion.Item eventKey={index.toString()}>
                            <Accordion.Header>{cast.name}</Accordion.Header>
                            <Accordion.Body>
                                <p>Cast id: {cast.id}</p>

                                <Link to="/performersHome">
                                    <Button variant="primary" onClick={() => handleButtonClick(cast.id)}>View Performers</Button>
                                </Link>
                                <Link to="/updateCast">
                                    <Button variant="info" onClick={() => handleButtonClick(cast.id)}>Update Cast</Button>
                                </Link>
                                <Link to="/deleteCast">
                                    <Button variant="danger" onClick={() => handleButtonClick(cast.id)}>Delete Cast</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}