import React, { useState } from 'react';

interface NavDropdownProps {
    text: string,
    children: JSX.Element[] | JSX.Element
}

// 외부 클릭 시 show하지 않기 위해서는 
// useEffect와 window.addEventListener를 같이 사용
// https://stackoverflow.com/questions/63086609/how-to-close-dropdown-on-outside-click-next-js
// Todo: 해당 코드 추가할 것

const NavDropdown = (props: NavDropdownProps) => {
    const [show, setShow] = useState(false);

    let dropdownMenuStyle = "dropdown-menu dropdown-animation"
    if (show) {
        dropdownMenuStyle = "dropdown-menu dropdown-animation show"
    }

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" 
                onClick={() => {setShow(!show)}}
                onMouseUp={() => {console.log("Up Up Up!")}}>
                    {props.text} <span className="caret"></span>
            </a>
            <div className={dropdownMenuStyle}>
                {props.children}
            </div>
        </li>
    )
}

export default NavDropdown