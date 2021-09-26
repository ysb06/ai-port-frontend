import React from 'react';

interface NavDropdownItemProps {
    link: string,
    text: string
}

const NavDropdownItem = (props: NavDropdownItemProps) => {
    return (
        <a className="dropdown-item dropdown-item-animation" href={props.link}>{props.text}</a>
    )
}

export default NavDropdownItem