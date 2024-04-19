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
            <h2>First Name: {performer.firstName}</h2>
            <h2>Last Name: {performer.lastName}</h2>
            <h2>Email: {performer.email}</h2>
            <h2>Phone Number: {performer.phoneNr}</h2>
            <h2>Department: {performer.department}</h2>
        </div>
    );
}