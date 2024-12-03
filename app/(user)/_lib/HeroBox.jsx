import { AccordionTrigger, Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';

export function HeroBox({user}){
    return(
        <>
            {
                user
                ?
                <>
                    <Accordion collapsible className='w-full text-transparent border-2 border-amber-300 bg-gradient-to-r from-amber-300 to-amber-700 bg-clip-text rounded-lg px-4'>
                        <AccordionItem value='item-1'>
                                <AccordionTrigger className='h-10'>
                                    <span className='font-extrabold text-center'>Welcome to CNCy | Craft N Carve  </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='p-4 bg-transparent '>
                                    <ol className='flex flex-col justify-around'>
                                        <li>1. Click on any material type to view design catalogue.</li>
                                        <li>2. Click on any design to get instant quotation.</li>
                                        <li>3. Use PostBox to get quotation for any design you have.</li>
                                    </ol>
                                    </div>
                                </AccordionContent>
                        </AccordionItem> 
                    </Accordion>

                </>
                :
                <></>
            }
            
        </>
    )
}


