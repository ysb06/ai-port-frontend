import Link from 'next/link';
import React from 'react';

interface NavBrandProps {
    text: string
}

const NavBrand = (props: NavBrandProps) => {
    return (
        <Link href="/" passHref>
            <a className="navbar-brand">
                {props.text}
            </a>
        </Link>
    )
}

export default NavBrand