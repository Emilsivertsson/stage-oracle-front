import {useState, useEffect, useContext} from "react";
import {getAllCastsPerformers} from "../api/Production-Performers-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";
import PerformerModal from "./PerformerModal.jsx";
import PerformerEmail from "./PerformerEmail.jsx";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function PerformersHome() {


    const {globalState, updateGlobalState} = useContext(AppContext);
    const [performers, setPerformers] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [selectedPerformerInfo, setSelectedPerformerInfo] = useState(null);
    const [showEmail, setShowEmail] = useState(false);
    const [selectedPerformerEmail, setSelectedPerformerEmail] = useState(null);
    const [hasEmail, setHasEmail] = useState(false);

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
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/productionHome">Productions</Breadcrumb.Item>
                <Breadcrumb.Item href="/manifestHome">Manifests</Breadcrumb.Item>
                <Breadcrumb.Item href="/castHome">Casts</Breadcrumb.Item>
                <Breadcrumb.Item active>Performers</Breadcrumb.Item>
            </Breadcrumb>
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
                            <Button variant="success" onClick={() => {
                                setShowInfo(true);
                                setSelectedPerformerInfo(performer);
                            }}>Show Performer info</Button>
                            <PerformerModal show={showInfo} onHide={() => setShowInfo(false)} selectedPerformer={selectedPerformerInfo}/>

                            <Button id="emailbutton" variant={"success"} disabled={!performer.email} onClick={() => {
                                setShowEmail(true);
                                setSelectedPerformerEmail(performer);
                            }}>{'\uD83D\uDCE7'} Send Email</Button>
                            <PerformerEmail show={showEmail} onHide={() => setShowEmail(false)} selectedPerformer={selectedPerformerEmail}/>

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