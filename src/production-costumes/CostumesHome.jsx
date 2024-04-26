import {useState, useEffect, useContext} from "react";
import {getAllActsCostumes} from "../api/Production-Costumes-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link, } from "react-router-dom";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TodoModal from '../TodoModal.jsx';

export default function CostumesHome() {

    const {globalState,updateGlobalState} = useContext(AppContext);
    const [costumes, setCostumes] = useState([]);
    const [showTodoModal, setShowTodoModal] = useState(false);

    useEffect(() => {
        getAllActsCostumes(globalState.actId).then((response) => {
            setCostumes(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [globalState.actId]);

    const handleButtonClick = (costumeId) => {
        updateGlobalState({...globalState,costumeId: costumeId});
    }



    return (
        <main className={'costumesHome'}>
            <h1>Costumes</h1>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/productionHome" }}>Productions</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/manifestHome" }}>Manifests</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/castHome" }}>Casts</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/performersHome" }}>Performers</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/actsHome" }}>Acts</Breadcrumb.Item>
                <Breadcrumb.Item active>Costumes</Breadcrumb.Item>
            </Breadcrumb>
            <Link to={`/createCostume`}>
                <Button variant="primary">Create new Costume</Button>
            </Link>

            <Button variant="success" onClick={() => {
                setShowTodoModal(true);
            }}>Show Todos</Button>
            <TodoModal show={showTodoModal} onHide={() => setShowTodoModal(false)}/>

            <Link to={`/actsHome`}>
                <Button variant="primary">Back to Acts</Button>
            </Link>
            {costumes.map((costume, index) => (
                <div key={index}>
                    <Accordion className="accordion-fixed-width" >
                        <Accordion.Item eventKey={index.toString()}>
                            <Accordion.Header>{costume.name}</Accordion.Header>
                            <Accordion.Body>
                                <p>Costume id: {costume.id}</p>

                                <Link to={`/garmentsHome`}>
                                    <Button variant="primary" onClick={() => handleButtonClick(costume.id)}>View Garments</Button>
                                </Link>
                                <Link to={`/updateCostume`}>
                                    <Button variant="info" onClick={() => handleButtonClick(costume.id)}>Update Costume</Button>
                                </Link>
                                <Link to={`/deleteCostume`}>
                                    <Button variant="danger" onClick={() => handleButtonClick(costume.id)}>Delete Costume</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}