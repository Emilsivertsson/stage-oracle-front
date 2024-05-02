import {Link} from "react-router-dom";
import PerformerProfile from "./PerformerProfile.jsx";
import {Button} from "react-bootstrap";
import ButtonComponent from "../../components/ButtonComponent.jsx";

export default function PerformerHome() {

    return (
        <div>
            <PerformerProfile/>

            <ButtonComponent buttonText="Update Measurements" linkPath="/measurementsUpdate" variant={"primary"}/>
            <ButtonComponent buttonText="Update Profile" linkPath="/profileUpdate" variant={"primary"}/>
            <br/>
            <ButtonComponent buttonText="Delete Account" linkPath="/deleteAccount" variant="danger"/>
        </div>
    );
}