import AppContext from "../AppContext.jsx";
import {useContext, useEffect, useState} from "react";
import {getAllGarmentsInProduction, toggleGarmentStatus} from "../api/Production-Garments-Axios.jsx";
import {Button, ListGroup} from "react-bootstrap";


export default function GarmentTODos() {


    const {globalState} = useContext(AppContext);
    const [garmentsTodo, setGarmentsTodo] = useState([]);

    useEffect(() => {
        getAllGarmentsInProduction(globalState.productionId).then((response) => {
            console.log("Data received:", response.data);
            setGarmentsTodo(response.data || []);

            console.log(globalState.productionId);
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [globalState.productionId, setGarmentsTodo]);


    const handleButtonClick = (id) => {
        console.log(id);
        toggleGarmentStatus(id).then((response) => {
            console.log(response);
        }
        ).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>GarmentTODos</h1>
            <ListGroup>
                {garmentsTodo.map((garment, index) => {
                    return (
                        <ListGroup.Item key={index}>
                            <h3>{garment.name}</h3>
                            <p>{garment.description}</p>
                            <Button variant="primary" onClick={() => handleButtonClick(garment.id)}>Toggle Status</Button>
                        </ListGroup.Item>
                    )

                })}
            </ListGroup>

        </div>
    )
}