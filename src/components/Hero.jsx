import { Link } from 'react-router';
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <p className="main-text">
        Architecting <span className="secondary-text">Digital Artifacts</span>
      </p>
      <p className='tertiary-text'>
        Full-stack developer specializing in building high-performance, visually
        stunning web experiences that live at the intersection of design and
        data.
      </p>
      <div className= 'btn-container'>
        <Link to='/projects'>
          <button className="btn">View Projects</button>
        </Link>
        <Link to='/aboutMe'>
          <button className="btn">About Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;