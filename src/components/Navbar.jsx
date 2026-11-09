import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";

import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="relative container mx-auto mt-5 flex justify-between">
            <div></div>
            <ul className="absolute left-1/2 flex -translate-x-1/2 gap-4">
                <li>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink href={"/career"}>Career</NavLink>
                </li>
            </ul>
            <ul className="flex items-center justify-center gap-4">
                <li>
                    <Image src={userAvatar} alt="" width={0} height={0} className="size-7"></Image>
                </li>
                <li>
                    <button className="btn bg-gray-800 text-white">LOGIN</button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
