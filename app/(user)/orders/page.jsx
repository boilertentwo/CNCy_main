import { ListOrders } from "@/lib/appwrite.config";
import { OrderBread } from "./_lib/Bread";




export default function OrderPage(){
   
    return(
        <>  <OrderBread/>
            <main className="flex flex-col flex-wrap justify-between gap-4 p-4">
                   <ListOrders/> 
            </main>
        </>
    )
}