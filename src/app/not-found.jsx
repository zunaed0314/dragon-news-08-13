import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-red-300 space-y-5">
            <h1 className="text-9xl font-bold text-red-700">404 NOT FOUND!</h1>
            <Link href="/">
                <button className="btn bg-green-500">Back to home baba</button>
            </Link>
        </div>
    );
};

export default NotFound;
