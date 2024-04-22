
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function PageNotFound() {
    return (
        <div>
            <h1 className="text-center">Page Not Found</h1>
            <p>The page you are looking for does not exist or you might not be logged in correctly</p>
            <Link to="/" className="back-button">

                <Button className="btn btn-primary" >Go to Home</Button>
            </Link>
        </div>
    );
}