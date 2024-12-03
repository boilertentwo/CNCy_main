'use client'
import { useAuthStore } from "@/lib/zustand/store"
import { useEffect } from "react"
import { Bell, Home, LogIn, Send, ShoppingCart } from "lucide-react"
import { Dashboard } from "./Dashboard"
import Link from "next/link"
// import { NegativeHold } from "@/lib/appwrite.config"
import {Negativehold} from "./Negaviteholder"
import Progresser from "./Loader"
import CircleLoad from "./Circleloader"
import Logout from "./Logout"
import { cookier } from "@/app/test"
import { toast } from "sonner"
import Image from "next/image"

const Homelink = ()=> {
    return(
        <>
            <Link href={'/'}>
                {/* <h1 className='bg-gradient-to-r from-amber-300 to-amber-700 shadow-lg bg-clip-text text-transparent italic content-center font-serif text-3xl font-bold '>orderBook</h1>    */}
                <div className="flex justify-between items-center">
                <Image src='/CNCyin.png' width={125} height={125} alt="Company logo"/>
                </div>
            </Link>
            
            {/* <Link href={'/'}>
                    <div className="h-10 w-48 flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-700 rounded-xl px-4 py-2">
                        <h1 className=" text-slate-950 italic font-serif text-2xl font-black">
                        CNCy
                        </h1>
                    </div>
            </Link> */}
        </>
    )
} 


const LoginLink =() => {
    return(
        <>
            <Link href={'/login'}>
                    <LogIn className="stroke-amber-400"/>
                </Link>
        </>
    )
}

const Negative = () => {
    return(
        <>
            <Link className="flex flex-row gap-2" href={'/'}>
                    <h1>Home</h1>
                    <Home/>
                    </Link>
                    <Link className="flex flex-row gap-2" href={'/login'}>
                        <h1>Login</h1>
                        <LogIn/>
                    </Link>
        </>
    )
}



export default function Header(){
    
    
     
    return(
        <>
            <div className="h-16 w-full flex flex-row justify-between items-center p-4">
                <Dashboard/>
                <Homelink></Homelink>
                <div className="min-w-48 hidden md:flex flex-row justify-between items-center gap-5 ">
                
                
                <Negativehold loader={CircleLoad} negative={Negative} >
                <Link className="flex flex-row gap-2" href={'/'}>
                        <h1>Home</h1>
                        <Home/>
                    </Link>
                    <Link className="flex flex-row gap-2" href={'/postbox'}>
                    <h1>PostBox</h1>
                    <Send/>
                    </Link>
                    <Link className="flex flex-row gap-2" href={'/orders'}>
                    <h1>Orders</h1>
                    <ShoppingCart/>
                    </Link>
                    <Logout/>
                </Negativehold>
                <>
                    
                </>
                
                

                </div>
                <div className="md:hidden flex">
                <Negativehold loader={CircleLoad} negative={LoginLink}>
                    <Link href={'/orders'}>
                        <ShoppingCart className="stroke-amber-300"/>
                    </Link>
                </Negativehold>
                </div>
                
            </div>
        </>
    )
}