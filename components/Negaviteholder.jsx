'use client'
import { useAuthStore } from "@/lib/zustand/store"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { getLoggedInUser } from "@/lib/appwrite.config"

export function Negativehold({ loader: LoadingComponent, negative: NegativeComponent, children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getLoggedInUser()
            .then((res) => setIsLoggedIn(res))
            .catch(() => {
                toast("Oops! Error occurred!", { description: "Check internet connection." })
            })
            .finally(() => setLoading(false)) // Ensure this runs in all cases
    }, [])

    if (loading) {
        return <LoadingComponent />
    }0

    if(!children){
        return (
            <>
                {!isLoggedIn?<NegativeComponent/>:null}
            
            </>
        )
    }
   
    return(
        <>
            {isLoggedIn?children:<NegativeComponent/>}
        </>
    )
}



 // const loading = useAuthStore((state)=>state.loading)
    // const isLoggedIn = useAuthStore((state)=>state.isAuthenticated)   
    
    //retrieve from the  server side function that returns true or false regarding the existence of cookies that were set while logging in.
    // const isLoggedIn = checkSession().then((res)=>res).catch((error)}))