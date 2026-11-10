import React from "react";
import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import RightSideBar from "@/components/HomePage/socials/RightSideBar";
import { getNews, getNewsByCategoryId } from "@/lib/data";
import NewsCard from "@/components/NewsCard/NewsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const NewsByCategory = async ({ params }) => {
   const { id } = await params;

   console.log("params is: ", id);

   const data = await getNews();
   const news = await getNewsByCategoryId(id);
   console.log("Eta hoilo news mama: ", news);
   console.log("Here are the news: ", data.news_category);

   const session = await auth.api.getSession({
      headers: await headers(),
   });

   // if (session) {
   //    console.log("Ei lo home er session: ", session);
   // } else {
   //    console.log("no session: ");
   //    return redirect("/login");
   // }

   return (
      <div className="container mx-auto mt-5 grid grid-cols-12 gap-5">
         <div className="col-span-3 space-y-3 text-3xl font-bold text-black">
            <LeftSideBar
               categories={data.news_category}
               activeId={id}
            ></LeftSideBar>
         </div>

         <div className="col-span-6 flex flex-col gap-3 text-3xl font-bold text-black">
            <h1>Dragon news home</h1>
            <div className="flex flex-col gap-10">
               {news.map((n) => {
                  return (
                     <NewsCard
                        key={n._id}
                        news={n}
                     ></NewsCard>
                     // <p key={n._id} className="rounded-sm border p-2 text-start text-base font-semibold">
                     //     {n.title}
                     // </p>
                  );
               })}
            </div>
         </div>
         <div className="col-span-3 bg-white text-3xl font-bold text-black">
            <RightSideBar></RightSideBar>
         </div>
      </div>
   );
};

export default NewsByCategory;
