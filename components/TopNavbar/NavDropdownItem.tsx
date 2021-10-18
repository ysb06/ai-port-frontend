import Link from 'next/link';
import React from 'react';

interface NavDropdownItemProps {
    link: string,
    text: string
}

const NavDropdownItem = (props: NavDropdownItemProps) => {
    return (
        <Link href={props.link} passHref>
            <a className="dropdown-item dropdown-item-animation" href={props.link}>{props.text}</a>
        </Link>
    )
}

export default NavDropdownItem