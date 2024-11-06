import PropTypes from 'prop-types';
import { Link, useLocation, useParams } from "react-router-dom";

const Menu = ({isOpen, onCloseMenu}) => {
    const location = useLocation();
    const { username } = useParams();
    
    return (
        <nav role="navigation" className="navbar">
            <ul role="list" className={`nav-list ${isOpen ? 'open' : ''}`}>
                <li className={`nav-item${location.pathname.includes('profile') ? ' current-item' : ''}`} onClick={onCloseMenu}>
                    <Link to={`/profile/${username}`}>Profile</Link>
                </li>
                <li className={`nav-item${location.pathname.includes('repositories') ? ' current-item' : ''}`} onClick={onCloseMenu}>
                    <Link to={`/repositories/${username}`}>Repositories</Link>
                </li>
                <li className={`nav-item${location.pathname.includes('followers') ? ' current-item' : ''}`} onClick={onCloseMenu}>
                    <Link to={`/followers/${username}`}>Followers</Link>
                </li>
            </ul>
        </nav>
    );
}

Menu.propTypes = {
    isOpen: PropTypes.any,
    onCloseMenu: PropTypes.any
};

export default Menu;
