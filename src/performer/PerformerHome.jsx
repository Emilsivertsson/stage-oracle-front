import {Link} from "react-router-dom";
import React from "react";
import PerformerProfile from "./PerformerProfile.jsx";
import {Button} from "react-bootstrap";

export default function PerformerHome() {
    return (
        <div>
            <PerformerProfile/>
            <Link to="/measurementsUpdate">
                <Button variant="primary">Update Measurements</Button>
            </Link>
            <Link to ="/profileUpdate">
                <Button variant="primary">Update Profile</Button>
            </Link>
            <br/>
            <Link to="/deleteAccount">
                <Button variant="danger">Delete Account</Button>
            </Link>
            <Link to="/logout">
                <Button variant="danger">Log Out</Button>
            </Link>
        </div>
    );
}