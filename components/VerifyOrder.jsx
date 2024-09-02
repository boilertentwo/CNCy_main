import { useState } from "react";
import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Separator } from "./ui/separator";
import { useRouter } from 'next/navigation';
import { RelativeTime } from "./ListAdmin";
import { DialogDescription, DialogTitle, Dialog, DialogContent, DialogHeader, DialogTrigger, DialogClose } from "./ui/dialog";
import { Input } from "./ui/input";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { format, parseISO } from 'date-fns';
import { deleteUserDocument, updateUserDocument } from "@/app/admin/appwrite.admin";
import { toast } from "sonner";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Randomstring from "randomstring";

export default function AdminVerifyOrders({ verifyOrders }) {
  const router = useRouter();
  const [user, setUser] = useState('');
  const {register, handleSubmit,formState:{errors}} = useForm();
  
  const onAddressSubmit = (data, orders) => {
    const addresscode = Randomstring.generate(7);
    const updatePromises = orders.map((order) => {
      const updateVerified = { ...data, addresscode: addresscode, verified: true };
      console.log(updateVerified);
      return updateUserDocument(order.$id, updateVerified);
    });

    Promise.all(updatePromises)
      .then((results) => {
        toast('Ready for crafting', {
          description: 'All orders in the group have been verified successfully.',
        });
        router.refresh();
      })
      .catch((error) => {
        toast('Try again', {
          description: 'Error occurred while verifying orders.',
        });
      });
  };

  const deleteOrder = (document) => {
    deleteUserDocument(document)
      .then((result) => {
        toast('Order removed!', { description: 'Cannot be undone now.' });
        router.refresh();
      })
      .catch((error) =>
        toast('Error removing order', { description: 'Check for network connection!' })
      );
  };

  const groupedOrders = verifyOrders.reduce((groups, obj) => {
    const key = `${obj.user}-${Math.floor(new Date(obj.orderedat).getTime() / (24 * 60 * 60 * 1000))}`;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(obj);
    return groups;
  }, {});

  return (
    <>
      {Object.values(groupedOrders).map((orders, groupIndex) => (
        <div
          className="w-full h-fit sm:w-full md:w-full lg:w-[48%] xl:w-[32%] border-2 border-amber-400 rounded-lg shadow-md lg:flex flex-wrap"
          key={groupIndex}
        >
          <Accordion collapsible className="w-full px-2">
          <AccordionItem value={`group-${groupIndex}`}>
              <AccordionTrigger>
                <div className="w-full flex justify-between items-center text-slate-400 p-4">
                  <strong className="text-sm font-medium text-white">from {orders[0].username}</strong>
                  <span className="text-slate-400">Total Orders: {orders.length}</span>
                </div>
              </AccordionTrigger>
            
              
                <AccordionContent>
                {orders.map((obj, index) => (
                  <section key={index} className="flex flex-col sm:flex-col md:flex-col lg:flex-row lg:flex-wrap lg:gap-y-4 justify-between items-start lg:items-center px-4 py-2 space-y-4 lg:space-y-0">
                    {/* Image Section */}
                    <div className="relative w-full lg:w-1/3 h-32 px-4 lg:h-36 overflow-hidden">
                      <Button
                        className="size-full bg-transparent text-white border-amber-400 border-2 border-dotted"
                        onClick={() => router.push(`/model/${obj.imageid}`)}
                      >
                        Click to view design
                      </Button>
                    </div>
                    {/* Details Section */}
                    <div className="w-full lg:w-2/3 space-y-2 text-slate-400">
                      <div className="flex justify-between">
                        <strong>Ordered on:</strong>
                        <span>{format(parseISO(obj.orderedat), 'dd-MM-yyyy, HH:mm:ss')}</span>
                      </div>
                      <div className="flex justify-between">
                        <strong>Dimensions:</strong>
                        <span>{obj.height}x{obj.width}x{obj.thickness} mm</span>
                      </div>
                      <div className="flex justify-between">
                        <strong>Material:</strong>
                        <span>{obj.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <strong>Sheets:</strong>
                        <span>{obj.sheets}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-bold text-white">
                        <strong>Total:</strong>
                        <span>₹ {obj.cost}</span>
                      </div>
                    </div>
                    <div className="w-full p-2 flex justify-between items-center gap-2">
                      <AlertDialog>
                        <div className="w-full flex justify-end">
                        <AlertDialogTrigger asChild className="w-1/2">
                          <Button variant="destructive">Remove</Button>
                        </AlertDialogTrigger>
                        </div>
                        
                        <AlertDialogContent className="max-w-[350px] lg:max-w-[450px]">
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete this order?</AlertDialogTitle>
                            <AlertDialogDescription>This action cannot be undone and will remove this order from line?</AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogAction onClick={() => deleteOrder(obj.$id)}>Delete</AlertDialogAction>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </section>))}
                </AccordionContent>  
              </AccordionItem>
            
          </Accordion>
          {/* Call Button outside Accordion */}
          
          <div className="w-full min-h-16 px-6 bg-transparent flex justify-end items-center gap-2">
            <Dialog>
              <div className="w-full flex justify-between items-center gap-1">
                  <DialogTrigger className="w-1/2" asChild>
                    <Button type="button">Verify</Button>
                  </DialogTrigger>
                  <Button className="w-1/2" variant="outline" disabled={!orders[0].userphone}>
                    <Link href={`tel:${orders[0].userphone}`}>Call</Link>
                  </Button>
              </div>
              
              <DialogContent className="w-[350px] px-4 rounded-lg">
                <DialogHeader className="px-2">
                  <DialogTitle className="text-left">Deliver at</DialogTitle>
                  <DialogDescription className="text-left">Add user address for delivery</DialogDescription>
                </DialogHeader>
                <form className="space-y-2 px-1" onSubmit={handleSubmit((data) => onAddressSubmit(data, orders))}>
                  <Input
                    className="min-h-24"
                    type="text"
                    placeholder="Add address"
                    {...register("address", { required: "Address is required" })}
                  />
                  {errors.address && <span className="text-red-500">{errors.address.message}</span>}
                  <DialogClose asChild>
                    <Button type="submit">Submit</Button>
                  </DialogClose>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      ))}
    </>
  );
}
