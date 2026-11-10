import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png";

import NavLink from "./NavLink";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import LogOutButton from "./LogOutButton";

const Navbar = async () => {
   const session = await auth.api.getSession({
      headers: await headers(),
   });

   const user = session?.user;

   const imageSrc = user?.image?.startsWith("http://") || user?.image?.startsWith("https://") ? user.image : userAvatar;

   return (
      <div className="relative container mx-auto mt-5 flex items-center justify-between">
         <div></div>

         <ul className="absolute left-1/2 flex -translate-x-1/2 gap-4">
            <li>
               <NavLink href="/">Home</NavLink>
            </li>
            <li>
               <NavLink href="/about">About</NavLink>
            </li>
            <li>
               <NavLink href="/career">Career</NavLink>
            </li>
         </ul>

         <ul className="flex items-center justify-center gap-4">
            {user ? (
               <>
                  <li className="flex items-center gap-2">
                     <Image
                        src={imageSrc}
                        alt="User avatar"
                        width={28}
                        height={28}
                        className="size-7 rounded-full"
                     />
                     <span>{user.name}</span>
                  </li>

                  <li>
                     <LogOutButton></LogOutButton>
                  </li>
               </>
            ) : (
               <li>
                  <Link
                     href="/login"
                     className="btn bg-gray-800 text-white"
                  >
                     LOGIN
                  </Link>
               </li>
            )}
         </ul>
      </div>
   );
};

export default Navbar;
