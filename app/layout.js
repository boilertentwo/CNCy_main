import { Inter } from "next/font/google";
import "./globals.css";
import Themeprovider from "@/components/Themeprovider";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CNCy | Craft and Carve",

  description: "Get CNC crafts at best price per sqft. Delivery option available!",
};

export default function RootLayout({ children }) { 
  return (
    <html suppressHydrationWarning lang="en">
        <body className={`${inter.className} md:px-10`}>
        <AuthProvider>
        <Themeprovider>
               {children}
               
               <Toaster/>
          </Themeprovider>
        </AuthProvider>
        </body>
    </html>
  );
}
