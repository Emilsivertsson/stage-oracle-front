import {useState, useEffect} from "react";
import {getAllPerformerActs} from "../api/Production-Acts-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function ActsHome() {

    const [acts, setActs] = useState([]);
    const {performerId} = useParams();

    useEffect(() => {
        getAllPerformerActs(performerId).then((response) => {
            setActs(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [performerId]);


    return (
        <main className={'actsHome'}>
            <h1>Casts</h1>
            <Link to={`/createAct/${performerId}`}>
                <Button variant="primary">Create new Act</Button>
            </Link>
            <Link to={`/performersHome/${performerId}`}>
                <Button variant="primary">Back to Performers</Button>
            </Link>
            {acts.map((act, index) => (
                <div key={index}>
                    <Accordion >
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{act.title}</Accordion.Header>
                            <Accordion.Body>
                                <p>Act id: {act.id}</p>

                                <Link to={`/costumesHome/${act.id}`}>
                                    <Button variant="primary">View Acts Costumes</Button>
                                </Link>
                                <Link to={`/updateAct/${act.id}/${performerId}`}>
                                    <Button variant="info">Update Cast</Button>
                                </Link>
                                <Link to={`/deleteAct/${act.id}/${performerId}`}>
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