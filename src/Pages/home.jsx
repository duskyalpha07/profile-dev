import {Link} from "react-router";



const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>
                <Link to={'/'}>Go Back</Link>
            </p>
        </div>
    )
}

export default Home;

