import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return(
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'font-weight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block','textAlign': 'center', 'font-weight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to='/'>
                Back to main page
            </Link>
        </div>
    );
};

export default Page404;