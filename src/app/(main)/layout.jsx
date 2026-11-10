import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import BreakingNews from "@/components/BreakingNews";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
   return (
      <div>
         <Header></Header>
         <BreakingNews></BreakingNews>
         <Navbar></Navbar>
         {children}
      </div>
   );
};

export default MainLayout;
