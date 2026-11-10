/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "i.ibb.co",
            port: "",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "images.unsplash.com",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "static.vecteezy.com",
            pathname: "/**",
         },
         // https://unsplash.com/photos/intense-super-saiyan-goku-figure-with-glowing-green-eyes-z2pXs0vHBfY
         {
            protocol: "https",
            hostname: "images.unsplash.com",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
            pathname: "/**",
         },
      ],
   },

   reactCompiler: true,

   turbopack: {
      rules: {
         "*.css": {
            loaders: ["@tailwindcss/turbopack"],
            as: "*.css",
         },
      },
   },
};

export default nextConfig;
