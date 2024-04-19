import {useState, useEffect, useContext} from "react";
import {getAllCostumesGarments} from "../api/Production-Garments-Axios";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";

export default function GarmentsHome() {

    const {globalState,updateGlobalState} = useContext(AppContext);
    const [garments, setGarments] = useState([]);


    useEffect(() => {
        getAllCostumesGarments(globalState.costumeId).then((response) => {
            setGarments(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [globalState.costumeId]);

    const handleButtonClick = (garmentId) => {
        updateGlobalState({...globalState,garmentId: garmentId});
    }


    return (
        <main className={'garmentsHome'}>
            <h1>Garments</h1>
            <Link to="/createGarment">
                <Button variant="primary">Create new Garment</Button>
            </Link>
            <Link to="/costumesHome">
                <Button variant="primary">Back to Costumes</Button>
            </Link>
            {garments.map((garment, index) => (
                <div key={index}>
                    <Accordion >
                        <Accordion.Item eventKey={index.toString()}>
                            <Accordion.Header>{garment.name}</Accordion.Header>
                            <Accordion.Body>
                                <p>Garment id: {garment.id}</p>
                                <p>Garment description: {garment.description}</p>

                                <Link to="/updateGarment">
                                    <Button variant="info" onClick={() => handleButtonClick(garment.id)}>Update Garment</Button>
                                </Link>
                                <Link to="/deleteGarment">
                                    <Button variant="danger" onClick={() => handleButtonClick(garment.id)}>Delete Garment</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </main>
    )
}