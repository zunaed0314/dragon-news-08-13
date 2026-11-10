import Navbar from "@/components/Navbar";
import React from "react";
import { montserrat } from "../layout";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout = async({ children }) => {

   const session = await auth.api.getSession({
      headers: await headers()
   })

   if(session){
      redirect('category/0')
   }
   return (
      <div className={`${montserrat.className}`}>
         <Navbar></Navbar>
         {children}
      </div>
   );
};

export default AuthLayout;
