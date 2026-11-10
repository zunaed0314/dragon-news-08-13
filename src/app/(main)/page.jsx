import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import RightSideBar from "@/components/HomePage/socials/RightSideBar";
import { auth } from "@/lib/auth";
import { useSession } from "@/lib/auth-client";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

const default_category_id = "0";

export default async function Home() {
   // const {data, isPending} = useSession();
   const session = await auth.api.getSession({
      headers: await headers(),
   });

   // if (!session) {
   //    redirect("/login");
   // }else{
   //    redirect(`/category/${default_category_id}`);
   // }

   redirect(`/category/${default_category_id}`);

   
}
