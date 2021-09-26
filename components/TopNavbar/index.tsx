import React, { useState } from 'react';
import BrandText from './NavBrand';
import NavButton from './NavButton';
import NavDropdown from './NavDropdown';
import NavDropdownDivider from './NavDropdownDivider';
import NavDropdownItem from './NavDropdownItem';
import NavSpecialLinks from './NavSpecialLinks';

const TopNavbar = () => {
    const [show, setShow] = useState(false);

    let TopNavbarStyle = "navbar-collapse dropdown-animation collapse"
    if (show) {
        TopNavbarStyle = "navbar-collapse dropdown-animation"
    }

    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container top-nav-container">
                <BrandText text="AI Port" />
                <button className="navbar-toggler collapsed" type="button"
                    onClick={() => {setShow(!show)}}
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={TopNavbarStyle} id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavDropdown text="AI Demos">
                            <NavDropdownItem link="http://naver.com" text="Test" />
                            <NavDropdownDivider />
                            <NavDropdownItem link="http://naver.com" text="Test" />
                            <NavDropdownItem link="http://naver.com" text="Test" />
                        </NavDropdown>
                        <NavButton link="/next" text="Next" />
                        <NavButton link="/next" text="게시판" />
                    </ul>
                    <NavSpecialLinks />
                </div>
            </div>
        </div>
    )
}

export default TopNavbar;