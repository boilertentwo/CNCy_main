'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
export function PostBox(){
    const router = useRouter()
    return(
        <>
            <div className={`lg:hidden h-36 w-full border-2 border-amber-400 rounded-lg bg-gradient-to-r from-amber-400 via-amber-700 to-amber-800 bg-clip-text text-transparent flex justify-between items-center p-5`}>
            <span className='text-md font-bold w-20 lg:w-fit text-left leading-tight'>
                WANT QUOTATION ON YOUR DESIGNS?
            </span>
            <Button onClick={()=>router.push('/postbox')} className='rounded-lg bg-gradient-to-r from-amber-400 via-amber-700 to-amber-800 bg-clip-text text-transparent' variant='outline'>
                Post Us
            </Button>
            </div>
        </>
    )
}

