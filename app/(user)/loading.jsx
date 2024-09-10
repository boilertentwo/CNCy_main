import Progresser from "@/components/Loader"


export default function Loaderpage(){
    return (
        <>
            <main className="w-full h-screen flex justify-start">
                <Progresser className='stroke-amber-400 size-24'/>
            </main>
        </>
    )

}