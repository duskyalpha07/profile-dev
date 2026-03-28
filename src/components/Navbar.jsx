import './Navbar.css';
import { Link } from 'react-router';

const Navbar = ({ children }) => {
  return (
    <>
      <div className="container-navbar">
        <div className="links">
          <p>
            <Link to="/home">Home</Link>
          </p>
          <p>
            <Link to="/aboutMe">About me</Link>
          </p>
          <p>
            <Link to="/contactMe">Contact me</Link>
          </p>
          <p>
            <Link to="/projects">Projects</Link>
          </p>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;