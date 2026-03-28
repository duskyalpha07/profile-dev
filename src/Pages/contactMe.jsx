import {Link} from "react-router";



const ContactMe = () => {
    return (
        <div>
            <h1>This is my contact information</h1>
            <p>
                <Link to={'/'}>Go Back</Link>
            </p>
        </div>
    )
}

export default ContactMe;

