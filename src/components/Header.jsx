import React from "react";
import headerlogo from "@/assets/logo.png";
import Image from "next/image";
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <Image src={headerlogo} alt="header logo" width={0} height={0} className="mt-5 h-auto w-auto"></Image>
            <p className="text-black">Journalism without fear or favor</p>
            <p className="text-black">Date: {format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;
