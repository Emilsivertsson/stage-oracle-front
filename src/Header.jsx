import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "left",
        padding: '10px'
    };

    return (
        <header style={headerStyle}>
            <img id="logo" src="src/assets/logo.webp" alt="Stage Oracle Logo" width="150" height="150"/>
            <h1>Stage Oracle</h1>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/">Home</Dropdown.Item>
                    <Dropdown.Item href="/loginPerformer">Performer login</Dropdown.Item>
                    <Dropdown.Item href="/loginProduction">Production User login</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
        </header>
    );
}