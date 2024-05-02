import {useContext, useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {getOneCostume, updateCostume} from "../api/Production-Costumes-Axios";
import {Form, Button} from "react-bootstrap";
import AppContext from "../AppContext.jsx";
import ButtonComponent from "../../components/ButtonComponent.jsx";

export default function UpdateCostume() {

    const {globalState} = useContext(AppContext);
    const [costume, setCostume] = useState({
        name: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        getOneCostume(globalState.costumeId).then((response) => {
            setCostume(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, globalState.costumeId]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setCostume({
            ...costume,
            [name]: value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(costume);
        updateCostume(globalState.costumeId,costume).then((response) => {
            console.log(response);
            navigate("/costumesHome");
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <div>
            <h1>Update Costume</h1>
            <Form className="form" onSubmit={handleUpdate}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="name"
                                  value={costume.name}
                                  required={true}
                                  onChange={handleInputChange}
                                  placeholder="Enter Name"/>
                </Form.Group>

                <br/>
                <Button variant="primary" type="submit">
                    Update Costume
                </Button>
            </Form>

            <ButtonComponent buttonText="Back to Costumes" linkPath="/costumesHome" variant="primary"/>

        </div>
    )


}