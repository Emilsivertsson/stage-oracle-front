
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cookies from "universal-cookie";
import headerLogo from './assets/logo.png';
import AppContext from "./AppContext.jsx";
import {useContext} from "react";

const cookies = new Cookies();

export default function Header() {

    const {globalState, updateGlobalState} = useContext(AppContext);
    const handleLogout = () => {
        cookies.remove("username");
        cookies.remove("jwt");
        updateGlobalState({
            ...globalState,
            loggedIn: false,
            production: false,
        });
    }

    return (
        <Navbar bg="light" expand="lg" className="Navbar">
            <Container>
                <img className="header-logo" src={headerLogo} alt={'Stage Oracle'} />
                <Navbar.Brand id={"navbar-h1"} href="/">Stage Oracle</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        {(globalState.loggedIn && globalState.production) && <Nav.Link href="/awanChat">Ask the Oracle</Nav.Link>}

                        <Nav.Link href="/loginPerformer">Performer login</Nav.Link>
                        <Nav.Link href="/loginProductionUser">Production User login</Nav.Link>
                        <Nav.Link href="/" onClick={handleLogout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}