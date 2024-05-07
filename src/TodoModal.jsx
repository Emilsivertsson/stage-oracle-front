import Modal from 'react-bootstrap/Modal';
import AppContext from "./AppContext.jsx";
import {useContext, useEffect, useState} from "react";
import {getAllGarmentsThatsNotDoneInProduction, toggleGarmentStatus} from "./api/Production-Garments-Axios.jsx";
import Accordion from "react-bootstrap/Accordion";
import {Badge, Button} from "react-bootstrap";

export default function TodoModal({show, onHide}) {


    const {globalState, updateGlobalState} = useContext(AppContext);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getAllGarmentsThatsNotDoneInProduction(globalState.productionId).then((response) => {
            setTodos(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [globalState.productionId]);

    const HandleMarkAsDone = async (garmentId) => {
        toggleGarmentStatus(garmentId).then((response) => {
            console.log(response.data);
            getAllGarmentsThatsNotDoneInProduction(globalState.productionId).then((response) => {
                setTodos(response.data);
            }).catch((error) => {
                console.error(error);
            });
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Garments not finished</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {todos.map((todo, index) => (
                    <div key={index}>
                        <Accordion className="accordion-fixed-width" >
                            <Accordion.Item eventKey={index.toString()}>
                                <Accordion.Header>{todo.name}</Accordion.Header>
                                <Accordion.Body>
                                    {todo.isDone ?
                                        <Badge id="garmentPill" pill bg="success">Done</Badge> :
                                        <Badge id="garmentPill" pill bg="danger">Not Done</Badge>
                                    }
                                    <p>Id: {todo.id}</p>
                                    <p>Description: {todo.description}</p>
                                    <Button variant="primary" onClick={() => HandleMarkAsDone(todo.id)}>Mark as Done</Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                ))}
            </Modal.Body>
        </Modal>
    );
}