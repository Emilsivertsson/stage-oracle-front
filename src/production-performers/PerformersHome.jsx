import {useState, useEffect, useContext} from "react";
import {getAllCastsPerformers} from "../api/Production-Performers-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";


export default function PerformersHome() {


    const {globalState, updateGlobalState} = useContext(AppContext);
    const [performers, setPerformers] = useState([]);


    useEffect(() => {
        getAllCastsPerformers(globalState.castId).then((response) => {
            setPerformers(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [globalState.castId]);

    const handleButtonClick = (performerId) => {
        updateGlobalState({...globalState,performerId: performerId});
    }


    return (
        <main className={'performersHome'}>
            <h1>Performers</h1>
            <Link to="/createPerformer">
                <Button variant="primary">Import Performer</Button>
            </Link>
            <Link to={`/castHome`}>
                <Button variant="primary">Back to Casts</Button>
            </Link>
            {performers.map((performer, index) => (
            <div key={index}>
                <Accordion className="accordion-fixed-width" >
                    <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header>{performer.firstName + ' ' + performer.lastName}</Accordion.Header>
                        <Accordion.Body>
                            <p>Id: {performer.id}</p>
                            <p>Firstname: {performer.firstName}</p>
                            <p>Lastname: {performer.lastName}</p>

                            <Link to="/actsHome">
                                <Button variant="primary" onClick={() => handleButtonClick(performer.id)}>View Acts</Button>
                            </Link>
                            <Link to="/deletePerformer">
                                <Button variant="danger" onClick={() => handleButtonClick(performer.id)}>Delete Performer</Button>
                            </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        ))}
        </main>
    )
}