import ModelIdBread from "./_lib/Bread";

export default function Modelgallery({params}){
    return(
        <>
            <ModelIdBread modelId={params.modelID}/>
            <main className="h-full w-full">
            <h1>Model gallery: {params.modelID}</h1>
            </main>
            
        </>
    );
}