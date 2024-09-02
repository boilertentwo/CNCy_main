export function Modal({children}){
    return(
        <>
             <div className="fixed inset-0 bg-black/60 z-50 p-10 flex items-center justify-center">
                {children}
             </div>
        </>
    )
}