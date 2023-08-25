import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to={'/'}>
        <img className="sub-logo" src={LogoSubtitle} alt="Faizan"></img>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/Faizan1203">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCOfAJ36-E-s6z6YFsc8DWDQ">
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
