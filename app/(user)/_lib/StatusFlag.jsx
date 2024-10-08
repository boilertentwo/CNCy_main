import Link from 'next/link';


export function StatusFlag({user, error}){
    return(
        <>
            {
                error
                ?<>
                    <div className="h-6 w-full text-slate-700 active:text-white text-center underline bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-500">
                        <Link href={'/'}>
                                <span >Check Internet connection.</span>
                        </Link>
                        
                    </div>
                </>:
                !user
                ?
                <>
                    <div className="h-6 w-full text-slate-700 active:text-white text-center underline bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-500">
                        <Link href={'/login'}>
                                <span >Please login to access services.</span>
                        </Link>
                        
                    </div>
                </>
                :null
            }
        </>
    )
}



