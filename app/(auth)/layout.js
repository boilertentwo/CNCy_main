import Header from "@/components/Header";

import { USstatusflag } from "@/lib/appwrite.config";

export const metadata = {
    title: "Login | orderBook",
  
    description: "Get CNC crafts at lowest price",
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