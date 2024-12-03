'use client'
import { CldImage } from "next-cloudinary"
import { useRouter } from "next/navigation"
export default function Modelimages(images){
    const router = useRouter()
    return(
        <>
            <section className="h-full w-full flex flex-row flex-wrap justify-around scroll-smooth snap-mandatory snap-y snap-mandatory overflow-y-auto gap-4">
                <div>
                    {
                        images.map((obj, index)=>(
                            <CldImage
                            key={index}
                            className='snap-center snap-always scroll-smooth'
                            src={obj.public_id}
                            width='150'
                            height='150'
                            alt={`image-${index+1}`}
                            onClick={()=>router.push(`/model/${obj.public_id}`)}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    )
}