import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    const news = [
        {
            id: 1,
            title: "Scientists Discover a New Species in the Amazon Rainforest",
        },
        {
            id: 2,
            title: "Global Technology Companies Invest in Artificial Intelligence",
        },
        {
            id: 3,
            title: "NASA Announces Plans for Its Next Moon Mission",
        },
        {
            id: 4,
            title: "Climate Change Continues to Affect Global Weather Patterns",
        },
        {
            id: 5,
            title: "Bangladesh Announces New Infrastructure Development Projects",
        },
        {
            id: 6,
            title: "Electric Vehicle Sales Reach Record High Worldwide",
        },
        {
            id: 7,
            title: "Scientists Develop a Promising New Battery Technology",
        },
        {
            id: 8,
            title: "Major Football Clubs Prepare for the Upcoming Season",
        },
        {
            id: 9,
            title: "Cybersecurity Experts Warn About Increasing Online Scams",
        },
        {
            id: 10,
            title: "New Educational Programs Aim to Improve Digital Skills",
        },
    ];
    return (
        <div className="container mx-auto flex justify-between gap-3 bg-cyan-200 p-2 mt-5">
            <button className="btn btn-error text-white">LATEST</button>
            <Marquee className="bg-cyan-100 px-3 py-1 text-black" pauseOnHover speed={120}>
                {news.map((n) => {
                    return <p key={n.id} className="mx-10"> {n.title} </p>;
                })}
            </Marquee>
        </div>
    );
};

export default BreakingNews;
