import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { showAiList } from '../../store/module/controllerUI';


interface NavDropdownProps {
    text: string,
    children: JSX.Element[] | JSX.Element
}

// 외부 클릭 시 show하지 않기 위해서는 
// useEffect와 window.addEventListener를 같이 사용
// https://stackoverflow.com/questions/63086609/how-to-close-dropdown-on-outside-click-next-js
// Todo: 해당 코드 추가할 것

const NavDropdown = (props: NavDropdownProps) => {
    const dispatch = useDispatch();
    const uiController = useSelector((state: RootState) => state.controllerUI)

    let dropdownMenuStyle = "dropdown-menu dropdown-animation"
    if (uiController.showAiList) {
        dropdownMenuStyle = "dropdown-menu dropdown-animation show"
    }

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" 
                onClick={() => {
                    dispatch(showAiList(true))
                }}
                >
                {props.text} <span className="caret"></span>
            </a>
            <div className={dropdownMenuStyle}>
                {props.children}
            </div>
        </li>
    )
}

export default NavDropdown