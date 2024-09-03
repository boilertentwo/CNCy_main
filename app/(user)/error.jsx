'use client'
import { Button } from "@/components/ui/button";
import Link from 'next/link'
export default function HomeError(){
    return(
        <>
            <main className="h-full w-full flex gap-5 justify-center items-center">
            <h1 className="text-4xl text-rose-400">Error at home page</h1>
            <Button><Link href='/'>Refresh</Link></Button>
            </main>
            
        </>
    )
}
