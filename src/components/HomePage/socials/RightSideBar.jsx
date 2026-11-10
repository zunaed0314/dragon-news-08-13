"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const RightSideBar = () => {
   const handleGoogleSignin = async () => {
      const data = await authClient.signIn.social({
         provider: "google",
      });
      console.log("Google sign in: ", data);
   };

   const handleGithubSignin = async () => {
      const data = await authClient.signIn.social({
         provider: "github",
      });
      console.log("Github sign in: ", data);
   };
   return (
      <div className="flex flex-col">
         <h1 className="mb-4">Login With</h1>
         <div className="mb-10 flex flex-col gap-2">
            <button
               className="btn items-center justify-center gap-2 rounded-md border border-sky-600 bg-white"
               onClick={handleGoogleSignin}
            >
               <FaGoogle className="size-5 text-sky-600" />
               <p className="text-lg text-sky-600">Login with Google</p>
            </button>
            <button
               className="btn flex items-center justify-center gap-3 rounded-md border border-black bg-white"
               onClick={handleGithubSignin}
            >
               <FaGithub className="size-5 text-black" />

               <p className="text-lg text-black">Login with Github</p>
            </button>
         </div>
         <div className="flex flex-col gap-3">
            <h1>Find us on</h1>
            <div className="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200">
               <div className="flex items-center gap-3 px-5 py-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
                     <FaFacebookF className="size-4 text-blue-900" />
                  </div>
                  <p className="text-lg font-medium text-gray-600">Facebook</p>
               </div>

               <div className="flex items-center gap-3 px-5 py-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
                     <FaTwitter className="size-4 text-sky-500" />
                  </div>
                  <p className="text-lg font-medium text-gray-600">Twitter</p>
               </div>

               <div className="flex items-center gap-3 px-5 py-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
                     <FaInstagram className="size-4 text-pink-500" />
                  </div>
                  <p className="text-lg font-medium text-gray-600">Instagram</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RightSideBar;
