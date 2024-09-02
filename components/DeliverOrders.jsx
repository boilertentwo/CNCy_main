import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { RelativeTime } from "./ListAdmin";
import { Separator } from "./ui/separator";

export function DeliverOrders({ Deliver }) {
  const addressCodeOrders = Deliver.reduce((acc, order) => {
    if (!acc[order.addresscode]) {
      acc[order.addresscode] = [];
    }
    acc[order.addresscode].push(order);
    return acc;
  }, {});

  return (
    <>
      {Object.values(addressCodeOrders).map((orders, groupIndex) => (
        <div
          key={groupIndex}
          className="w-full h-fit sm:w-full md:w-full lg:w-[48%] xl:w-[32%] border-2 border-amber-400 rounded-lg shadow-md lg:flex flex-wrap"
        >
          <Accordion collapsible className="w-full px-2">
          <AccordionItem value={`item-${groupIndex}`} >
                <AccordionTrigger>

                  <div className="w-full flex justify-between items-center text-slate-400 p-4">
                    <div className="flex justify-around items-center">
                      <Input type="checkbox" />
                      <strong className="text-lg font-medium text-white text-emerald-500">
                        {orders[0].addresscode}
                      </strong>
                    </div>
                    <div className="w-1/2 flex justify-around items-center">
                      <RelativeTime date={orders[0].orderedat} />
                      
                    </div>
                  </div>
                </AccordionTrigger>
            <AccordionContent className="p-4">
            {orders.map((obj, index) => (
                  <section key={index} className="flex flex-col sm:flex-col md:flex-col lg:flex-row lg:flex-wrap lg:gap-y-4 justify-between items-start lg:items-center px-4 py-2 space-y-4 lg:space-y-0">
                    <div className="w-full flex justify-between">
                      <strong>Material:</strong>
                      <span>{obj.material}</span>
                    </div>
                    <div className="w-full flex justify-between">
                      <strong>No of Sheets:</strong>
                      <span>{obj.sheets}</span>
                    </div>
                    <div className=" w-full flex justify-between">
                      <strong>Name:</strong>
                      <span>{obj.username}</span>
                    </div>
                    <div className="w-full flex justify-between">
                      <strong>Address:</strong>
                      <span>{obj.address}</span>
                    </div>
                    <Separator/>
                  </section> 
                    
                    ))}
                </AccordionContent>
              </AccordionItem>
           
          </Accordion>
          <div className="w-full p-4 flex justify-end items-center">
            <Button
              className="w-full lg:w-1/2"
              variant="outline"
            >
              <Link href={`tel:${orders[0].userphone}`}>
                Call
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
