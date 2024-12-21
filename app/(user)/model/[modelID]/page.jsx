'use client'

import ModelIdBread from "./_lib/Bread";
import { useSearchParams } from "next/navigation";
import Modelimages from "./_lib/ModelImages";


export default function Modelgallery({params}){
    const searchParams = useSearchParams()
    const search = searchParams.get('type')
    const tag = `tags=${search}`
    return(
        <>
            <ModelIdBread modelId={params.modelID}/>
            <main className="min-h-screen w-full p-2 flex flex-col gap-3 ">
            {/* <h1>Model gallery: {params.modelID}</h1> */}
            {/* <h1>Search Params: {tag}</h1> */}
            <div>
                
            </div>
            <Modelimages tag={tag}/>
            </main>
            
        </>
    );
}