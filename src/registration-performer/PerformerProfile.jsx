import { useState, useEffect } from "react";
import { getOnePerformer } from "../api/Registration-Perfomer-Axios.jsx";
import Table from 'react-bootstrap/Table';

export default function PerformerProfile() {
    const [performer, setPerformer] = useState({
        "firstName": "Name",
        "lastName": "Name",
        "email": "Name",
        "phoneNr": "Name",
        "department": "Name"
    });

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
            <h1 className="text-center">Performer Profile</h1>
            <h4>Please keep your Profile and Measurements updated!</h4>

            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{performer.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{performer.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{performer.email}</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>{performer.phoneNr}</td>
                    </tr>
                    <tr>
                        <td>Department</td>
                        <td>{performer.department}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}