import {useState, useEffect, useContext} from "react";
import {getAllActsCostumes} from "../api/Production-Costumes-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link, } from "react-router-dom";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TodoModal from '../TodoModal.jsx';
import ButtonComponent from "../../components/ButtonComponent.jsx";

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

            <ButtonComponent buttonText="Create new Costume" linkPath="/createCostume" variant="primary"/>

            <Button variant="success" onClick={() => {
                setShowTodoModal(true);
            }}>Show Garments</Button>
            <TodoModal show={showTodoModal} onHide={() => setShowTodoModal(false)}/>

            <ButtonComponent buttonText="Back to Acts" linkPath="/actsHome" variant="primary"/>

            {costumes.map((costume, index) => (
                <div key={index}>
                    <Accordion className="accordion-fixed-width" >
                        <Accordion.Item eventKey={index.toString()}>
                            <Accordion.Header>{costume.name}</Accordion.Header>
                            <Accordion.Body>
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