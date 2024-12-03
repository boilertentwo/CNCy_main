'use client'
import { getLoggedInUser } from "@/lib/appwrite.config"
import {useEffect, useState} from 'react'

export function PositiveHold({loader:LoadingComponent, positive:PositiveComponent, children}){
    
    //remove the store values
    //call the server side function to check whether the user is logged in or not.
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

    if(loading){
        return <LoadingComponent/>
    }
    //improve the conditional statement
    return(
        <>
            {!isLoggedIn?children:<PositiveComponent/>}
        </>
    )
}