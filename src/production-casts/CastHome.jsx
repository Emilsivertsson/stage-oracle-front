import {useState, useEffect, useContext} from "react";
import {getAllManifestCasts} from "../api/Production-Cast-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";

export default function CastHome() {

    const {globalState, updateGlobalState} = useContext(AppContext);
    const [casts, setCasts] = useState([]);

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
            <Link to="/createCast">
                <Button variant="primary">Create new Cast</Button>
            </Link>
            <Link to="/manifestHome">
                <Button variant="primary">Back to Manifests</Button>
            </Link>
            {casts.map((cast, index) => (
                <div key={index}>
                    <Accordion className="accordion-fixed-width">
                        <Accordion.Item eventKey={index.to}>
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