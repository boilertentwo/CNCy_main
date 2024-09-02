import Header from "@/components/Header";
import { StatusFlag } from "./_lib/StatusFlag";
import { USstatusflag } from "@/lib/appwrite.config";

export const metadata = {
    title: "CNCy | Craft and Carve",
  
    description: "Get CNC crafts at best price. Delivery option available.",
  };


export default function UserLayout({children,modal}){
    return(
        <>
            <main>
                <Header></Header>
                <USstatusflag/>
                {modal}
                {children}
            </main>
        </>
    )
}