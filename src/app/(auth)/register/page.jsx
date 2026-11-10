"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm();

   const handleRegisterFunc = (data) => {
      console.log("These are data: ", data);
   };
   return (
      <div className="container mx-auto flex min-h-[80vh] items-center justify-center bg-slate-100">
         <div className="space-y-3 rounded-lg bg-white p-10">
            <h1 className="border-b border-gray-300 pb-6 text-4xl font-bold text-black">Resgister your account</h1>
            <form
               className="space-y-3 rounded-lg bg-white p-6"
               onSubmit={handleSubmit(handleRegisterFunc)}
            >
               <fieldset className="fieldset">
                  <legend className="fieldset-legend">Name</legend>
                  <input
                     type="text"
                     className="input focus:border-blue-500 focus:ring-1 focus:outline-none"
                     placeholder="Type your email"
                     {...register("name", { required: "Nme is required" })}
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
               </fieldset>{" "}
               <fieldset className="fieldset">
                  <legend className="fieldset-legend">Photo URL</legend>
                  <input
                     type="text"
                     className="input focus:border-blue-500 focus:ring-1 focus:outline-none"
                     placeholder="Give your photo URL"
                     {...register("photo", { required: "Photo URL is required" })}
                  />
                  {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
               </fieldset>{" "}
               <fieldset className="fieldset">
                  <legend className="fieldset-legend">Email</legend>
                  <input
                     type="email"
                     className="input focus:border-blue-500 focus:ring-1 focus:outline-none"
                     placeholder="Type your email"
                     {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
               </fieldset>{" "}
               <fieldset className="fieldset">
                  <legend className="fieldset-legend">Password</legend>
                  <input
                     type="password"
                     className="input focus:border-blue-500 focus:ring-1 focus:outline-none"
                     placeholder="Type your password"
                     {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
               </fieldset>{" "}
               <button className="btn w-full bg-indigo-950 text-white">Login</button>
               <p>
                  Already have an account?{" "}
                  <Link
                     className="font-semibold text-pink-500 hover:underline"
                     href="/login"
                  >
                     Login
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default RegisterPage;
