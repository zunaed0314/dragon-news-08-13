"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
   const router = useRouter();

   const handleLogout = async () => {
      await authClient.signOut();
      router.replace("/login");
      router.refresh();
   };

   return (
      <button
         onClick={handleLogout}
         className="btn bg-red-700 text-white"
      >
         LOGOUT
      </button>
   );
};

export default LogOutButton;
