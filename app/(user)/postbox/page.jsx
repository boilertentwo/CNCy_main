import { UserReference } from "@/components/usp1/UserReference";
import { PostBoxCrumbs } from './_lib/Crumbs';
import { Check } from "lucide-react";
import { AccordionTrigger, Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
export default function PostBox(){
    return(
        <>
            <PostBoxCrumbs/>
            <div className="w-full p-3">
            <Accordion collapsible className='w-full px-4 text-transparent border-2 border-amber-300 bg-gradient-to-r from-amber-300 to-amber-700 bg-clip-text rounded-lg '>
                        <AccordionItem value='item-1'>
                                <AccordionTrigger className='h-10'>
                                    <span className='font-extrabold text-center'>Instant quotation for your designs</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='p-4 bg-transparent '>
                                    <ol className='flex flex-col justify-around'>
                                        <li>1. Upload any design you have.</li>
                                        <li>2. Enter measurement of the model required in inches</li>
                                        <li>3. If you are a registered user, we get follw up with quotation in no time</li>
                                        <li>4. If you are not registered user, provide us with contact info.</li>
                                    </ol>
                                    </div>
                                </AccordionContent>
                        </AccordionItem> 
                    </Accordion>
            </div>
            
            <main className="w-full h-full p-3 flex lg:flex-row flex-col lg:flex-wrap gap-10 justify-around items-center">
            <div className="max-w-96">
            <UserReference/>
            </div>
            <main className="p-5 max-w-96 min-h-80 text-lg border-amber-400 flex flex-col justify-around items-center border-2 rounded-lg">
                <div className="flex flex-row gap-4 justify-around items-center">
                    <span>
                    <Check className="stroke-sky-500"/>
                    </span>
                    <span>You can post us without logging in.</span>
                </div>
                <div className="flex flex-row gap-4 justify-around items-center">
                    <span>
                    <Check className="stroke-sky-500"/>
                    </span>
                    <span>Get instant quotations on any designs you have.</span>
                </div>
                <div className="flex flex-row gap-4 justify-around items-center">
                    <span>
                    <Check className="stroke-sky-500"/>
                    </span>
                    <span>Leave us your contact info, if you are not a user.</span>
                </div>
                <div className="flex flex-row gap-4 justify-around items-center">
                    <span>
                    <Check className="stroke-sky-500"/>
                    </span>
                    <span>We will reach out to you with quotations.</span>
                </div>
            </main>
            </main>
            
        </>
    )
}