import Image from "next/image";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import Link from "next/link";

const NewsCard = ({ news }) => {
    return (
        <div className="flex flex-col rounded-lg p-2 shadow-md">
            <div className="header -mx-2 -mt-2 flex items-center justify-between bg-gray-200 p-3 mb-3">
                <div className="flex gap-2">
                    <Image src={news.author.img} alt="sad" width={100} height={100} className="size-10 rounded-full object-cover" />
                    <div className="flex flex-col">
                        <p className="text-sm">{news.author.name}</p>
                        <p className="text-sm">{news.author?.published_date?.split(" ")[0]}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="group">
                        <CiBookmark className="group-hover:hidden" />
                        <FaBookmark className="hidden group-hover:block" />
                    </div>
                    <CiShare2 className="size-6" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 p-2">
                <p className="text-lg">{news.title}</p>
                <Image src={news.image_url} alt={news.title} width={650} height={800} className="rounded-md object-cover" />
                <p className="mt-5 line-clamp-3 text-justify text-sm font-normal">{news.details}</p>
            </div>
            <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1">
                        <FaStar className="size-6 text-yellow-500" />
                        <p className="text-[20px] leading-none text-gray-700">{news.rating.number}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaEye className="size-6 text-gray-700" />
                        <p className="text-[20px] text-gray-700">{news.total_view}</p>
                    </div>
                </div>
                <div>
                    <Link href={`/news/${news._id}`}>
                        <button className="btn btn-sm">Show details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
