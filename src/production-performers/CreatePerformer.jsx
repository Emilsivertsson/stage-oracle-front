import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {createPerformer, getAllPerformersFromRegistry} from "../api/Production-Performers-Axios.jsx";



export default function CreatePerformer() {

    const [performers, setPerformers] = useState({});
    const [performerId, setPerformerId] = useState("");
    const navigate = useNavigate();
    const {castId} = useParams();

    useEffect(() => {
        getAllPerformersFromRegistry().then((response) => {
            setPerformers(response.data);
        }).catch((error) => {
            console.error(error);
        });
    } , [navigate]);


    const handleCreate = (e) => {
        e.preventDefault();
        console.log(performerId);
        createPerformer(castId, performerId).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Create Performer</h1>
            <form onSubmit={handleCreate}>
                <select name="performerId" onChange={(e) => setPerformerId(e.target.value)}>
                    <option value="">Select Performer</option>
                    {performers.map((performer, index) => (
                        <option key={index} value={performer.id}>{performer.firstName} {performer.lastName}</option>
                    ))}
                </select>
                <button type="submit">Insert Performer into Production</button>
            </form>
        </div>
    )


}