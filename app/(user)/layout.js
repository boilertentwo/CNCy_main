import Header from "@/components/Header";
import { StatusFlag } from "./_lib/StatusFlag";
import { USstatusflag } from "@/lib/appwrite.config";

export const metadata = {
    title: "Craft N Carve | orderBook",
  
    description: "Get CNC crafts at lowest price",
  };


export default function UserLayout({children}){
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