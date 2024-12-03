'use client'

import ModelIdBread from "./_lib/Bread";
import { useSearchParams } from "next/navigation";
import { Servemodelimage } from "@/lib/cloudinary.config";

export default function Modelgallery({params}){
    const searchParams = useSearchParams()
    const search = searchParams.get('type')
    const tag = ` AND tag=${search}`   
    return(
        <>
            <ModelIdBread modelId={params.modelID}/>
            <main className="h-full w-full">
            <h1>Model gallery: {params.modelID}</h1>
            <h1>Search Params: {tag}</h1>
            {/* <Servemodelimage folder={params.modelID} tag={tag}/> */}
            </main>
            
        </>
    );
}