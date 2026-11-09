import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div className="space-y-3">
            <h1 className="font-bold">All category</h1>
            <ul className="flex flex-col gap-3 bg-cyan-200">
                {categories.map((category) => {
                    return (
                        <Link
                            href={`/category/${category.category_id}`}
                            key={category.category_id}
                            className={`${activeId === category.category_id && "bg-gray-200"} rounded-md p-2 text-center text-2xl font-bold`}
                        >
                            <li>{category.category_name}</li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default LeftSideBar;
