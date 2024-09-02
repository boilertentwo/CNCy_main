import Header from "@/components/Header";

import { USstatusflag } from "@/lib/appwrite.config";

export const metadata = {
    title: "Login | orderBook",
  
    description: "CNCy | Craft and Carve",
  };

export default function AuthLayout({children}){
    return(
        <>
            <main>
                <Header></Header>
                <USstatusflag/>
                {children}
            </main>
        </>
    )
}