import PropTypes from 'prop-types';
import githubLogo from "../../assets/icons/github.svg";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import { useState } from 'react';

const Header = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const closeMenu = () => {
        setIsOpen(false);
    };
    
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col brand">
                            <img src={githubLogo} className="logo github" alt="Github logo" />
                            <Menu isOpen={isOpen} onCloseMenu={closeMenu}/>
                        </div>
                        <div className="col search">
                            <Search />
                        </div>
                        <div className='col burger'>
                            <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
                                {isOpen ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </>
    );
}

Header.propTypes = {
    children: PropTypes.any
};
  
export default Header;