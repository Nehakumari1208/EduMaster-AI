// import { Inter, Outfit } from "next/font/google";
// import "./globals.css";
// import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";

// const inter = Outfit({ subsets: ["latin"] });

// export const metadata = {
//   title: "AI Course Generator",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//       <head>
//           <link rel="icon" href="/favicon.jpg" type="image/jpg" />
//         </head>
//         <GoogleOneTap />
//         <body className={inter.className}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "AI Course Generator",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.jpg" type="image/jpg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={outfit.className}>
          <GoogleOneTap />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
