import { useState, useEffect } from "react";
import { getOnePerformer } from "../api/Registration-Perfomer-Axios.jsx";

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

            <table>
                <tbody>
                <tr>
                    <td><strong>First Name:</strong></td>
                    <td>{performer.firstName}</td>
                </tr>
                <tr>
                    <td><strong>Last Name:</strong></td>
                    <td>{performer.lastName}</td>
                </tr>
                <tr>
                    <td><strong>Email:</strong></td>
                    <td>{performer.email}</td>
                </tr>
                <tr>
                    <td><strong>Phone Number:</strong></td>
                    <td>{performer.phoneNr}</td>
                </tr>
                <tr>
                    <td><strong>Department:</strong></td>
                    <td>{performer.department}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}