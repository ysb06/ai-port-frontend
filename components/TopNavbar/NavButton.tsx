import Link from 'next/link';
import React from 'react';

interface NavItemProps {
    link: string,
    text: string
}

const NavButton = (props: NavItemProps) => {
    return (
        <li className="nav-item top-nav-item top-nav-button">
            <Link href={props.link} passHref>
                <a className="nav-link">
                    {props.text}
                </a>
            </Link>
        </li>
    )
}

export default NavButton