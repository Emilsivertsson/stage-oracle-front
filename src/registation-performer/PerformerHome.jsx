import {Link} from "react-router-dom";
import React from "react";
import PerformerProfile from "./PerformerProfile.jsx";
import {Button} from "react-bootstrap";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const handleLogout = () => {
    cookies.remove("username");
    cookies.remove("token");
    window.location.href = "/";
};

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
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </div>
    );
}