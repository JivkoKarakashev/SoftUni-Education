import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>Jivko Karakashev &copy; 2023
            <Link to="https://github.com/JivkoKarakashev" target="_blank">
                <FontAwesomeIcon className="github" icon={faGithub} size="2xl" style={{color:"#f0f6fc"}} />
            </Link>
            <Link to="https://linkedin.com/in/jivko-karakashev-1811202b0" target="_blank">
                <FontAwesomeIcon className="linkedin" icon={faLinkedin} size="2xl" style={{color:"#0a66c2"}} />
            </Link>
        </footer>
    );
};

export default Footer;