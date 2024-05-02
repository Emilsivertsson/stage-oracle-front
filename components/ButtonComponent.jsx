import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function ButtonComponent({ buttonText, linkPath, variant }) {


    return (
        <Link to={linkPath}>
            <Button variant={variant}>{buttonText}</Button>
        </Link>
    );

}