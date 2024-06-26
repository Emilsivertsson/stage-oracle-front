import {useState, useEffect, useContext} from "react";
import {getAllPerformerActs} from "../api/Production-Acts-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TodoModal from '../TodoModal.jsx';
import ButtonComponent from "../../components/ButtonComponent.jsx";

export default function ActsHome() {

    const {globalState, updateGlobalState} = useContext(AppContext);
    const [acts, setActs] = useState([]);
    const [showTodoModal, setShowTodoModal] = useState(false);

    useEffect(() => {
        getAllPerformerActs(globalState.performerId).then((response) => {
            setActs(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [globalState.performerId]);

    const handleButtonClick = (actId) => {
        updateGlobalState({...globalState, actId: actId});
    }



    return (
        <main className={'actsHome'}>
            <h1>Acts</h1>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/productionHome" }}>Productions</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/manifestHome" }}>Manifests</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/castHome" }}>Casts</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/performersHome" }}>Performers</Breadcrumb.Item>
                <Breadcrumb.Item active>Acts</Breadcrumb.Item>
            </Breadcrumb>

            <ButtonComponent buttonText="Create new Act" linkPath="/createAct" variant="primary"/>

            <Button variant="success" onClick={() => {
                setShowTodoModal(true);
            }}>Show Garments</Button>
            <TodoModal show={showTodoModal} onHide={() => setShowTodoModal(false)}/>

            <ButtonComponent buttonText="Back to Performers" linkPath="/performersHome" variant="primary"/>

            {acts.map((act, index) => (
                <div key={index}>
                    <Accordion className="accordion-fixed-width" >
                        <Accordion.Item eventKey={index.toString()}>
                            <Accordion.Header>{act.title}</Accordion.Header>
                            <Accordion.Body>
                                <Link to="/costumesHome">
                                    <Button variant="primary" onClick={() => handleButtonClick(act.id)}>Costumes</Button>
                                </Link>
                                <Link to="/updateAct">
                                    <Button variant="info" onClick={() => handleButtonClick(act.id)}>Update Act</Button>
                                </Link>
                                <Link to="/deleteAct">
                                    <Button variant="danger" onClick={() => handleButtonClick(act.id)}>Delete Act</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}