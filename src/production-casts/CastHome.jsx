import {useState, useEffect} from "react";
import {getAllManifestCasts} from "../api/Production-Cast-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function CastHome() {

    const [casts, setCasts] = useState([]);
    const {manifestId} = useParams();

    useEffect(() => {
        getAllManifestCasts(manifestId).then((response) => {
            setCasts(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [manifestId]);


    return (
        <main className={'castHome'}>
            <h1>Casts</h1>
            <Link to={`/createCast/${manifestId}`}>
                <Button variant="primary">Create new Cast</Button>
            </Link>
            <Link to={`/manifestHome/${manifestId}`}>
                <Button variant="primary">Back to Manifests</Button>
            </Link>
            {casts.map((cast, index) => (
                <div key={index}>
                    <Accordion >
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{cast.name}</Accordion.Header>
                            <Accordion.Body>
                                <p>Cast id: {cast.id}</p>

                                <Link to={`/performersHome/${cast.id}`}>
                                    <Button variant="primary">View Casts Performers</Button>
                                </Link>
                                <Link to={`/updateCast/${cast.id}/${manifestId}`}>
                                    <Button variant="info">Update Cast</Button>
                                </Link>
                                <Link to={`/deleteCast/${cast.id}/${manifestId}`}>
                                    <Button variant="danger">Delete Cast</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}