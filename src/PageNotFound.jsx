
import {Link} from "react-router-dom";

export default function PageNotFound() {
    return (
        <div>
            <h1 className="text-center">Page Not Found</h1>
            <p>The page you are looking for does not exist</p>
            <Link to="/">Go Home</Link>
        </div>
    );
}