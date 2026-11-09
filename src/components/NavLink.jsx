'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname()
    return (
        <div>
            <Link href={href} className={`${pathname === href ? "rounded-xl bg-red-600 px-3 py-2 text-white" : "bg-white text-black"}`}>{children}</Link>
        </div>
    );
};

export default NavLink;