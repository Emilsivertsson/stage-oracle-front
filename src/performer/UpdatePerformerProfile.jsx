import React, {useEffect, useState} from "react";
import {getOnePerformer, updatePerformerProfile} from "../api/PerfomerAxios.jsx";
import {Link, useNavigate} from "react-router-dom";
import { Form, Button } from "react-bootstrap";



export default function UpdatePerformerProfile() {

    const navigator = useNavigate();
    const [isCorrectInput, setCorrectInput] = useState(true)

    const [performer, setPerformer] = useState({
        "firstName": "Name",
        "lastName": "Name",
        "email": "Name",
        "phoneNr": "Name",
        "department": "Name"
    });

    async function handleSubmit (e) {
        e.preventDefault();
        setCorrectInput(true)

        try {
            const result = await updatePerformerProfile(performer)
            console.log(result);
            navigator("/performerHome");

        } catch (error) {
            console.log(error);
            setCorrectInput(false);

        }
    }

    useEffect(() => {
        const fetchPerformer = async () => {
            const result = await getOnePerformer();
            if (result.success) {
                setPerformer(result.data);
            }
        };
        fetchPerformer();
    }, []);



    return (
        <div>
            <h1 className="text-center">Performer Profile Update</h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"
                                  name="firstName"
                                  value={performer.firstName}
                                  onChange={(e) => setPerformer({...performer, firstName: e.target.value})}
                                  placeholder="Enter first name"/>
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"
                                  name="lastName"
                                  value={performer.lastName}
                                  onChange={(e) => setPerformer({...performer, lastName: e.target.value})}
                                  placeholder="Enter last name"/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                                  name="email"
                                  value={performer.email}
                                  onChange={(e) => setPerformer({...performer, email: e.target.value})}
                                  placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="formBasicPhoneNr">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text"
                                  name="phoneNr"
                                  value={performer.phoneNr}
                                  onChange={(e) => setPerformer({...performer, phoneNr: e.target.value})}
                                  placeholder="Enter phone number"/>
                </Form.Group>

                <Form.Group controlId="formBasicDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="text"
                                  name="department"
                                  value={performer.department}
                                  onChange={(e) => setPerformer({...performer, department: e.target.value})}
                                  placeholder="Enter department"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
            <Link to="/performerHome">
                <Button variant="primary">Back</Button>
            </Link>

            {!isCorrectInput ? (
                <h3>Incorrect input, please try again</h3>
            ) : ( <h3></h3>)}

        </div>
    );
}