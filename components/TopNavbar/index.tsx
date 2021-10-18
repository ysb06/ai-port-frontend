import React, { useState } from 'react';
import BrandText from './NavBrand';
import NavButton from './NavButton';
import NavDropdown from './NavDropdown';
import NavDropdownDivider from './NavDropdownDivider';
import NavDropdownItem from './NavDropdownItem';
import { NavGithubButton } from './NavSpecialLinks';

const TopNavbar = () => {
    const [show, setShow] = useState(false);

    let TopNavbarStyle = "navbar-collapse dropdown-animation collapse"
    if (show) {
        TopNavbarStyle = "navbar-collapse dropdown-animation"
    }

    return (
        <div id="top-nav" className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <button className="navbar-toggler collapsed" type="button"
                    onClick={() => { setShow(!show) }}
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <BrandText text="AI Port" />
                <div className={TopNavbarStyle} id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavButton link="/profile" text="프로필" />
                        <NavDropdown text="AI Demos">
                            <NavDropdownItem link="/mask" text="마스크 인식" />
                            <NavDropdownDivider />
                            <NavDropdownItem link="#" text="준비 중" />
                        </NavDropdown>
                        <NavButton link="/board" text="자유게시판" />
                    </ul>
                    <ul className="navbar-nav ms-md-auto">
                        <NavGithubButton />
                    </ul>
                </div>
                {/* <ul className="navbar-nav ms-md-auto">
                    <NavButton link="/next" text="로그인" />
                </ul> */}
                {/* 추후 작은 화면에서 로그인 버튼 순서 변경하기 */}
            </div>
        </div>
    )
}

export default TopNavbar;