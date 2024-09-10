import Image from "next/image"
import { Separator } from "./ui/separator"


export default function Footer(){
    return(
        <>
            <Separator/>
            <main className="h-24 w-full flex justify-center items-center">
                    <div>
                        <Image
                         src='/Logo.png'
                         width={200}
                         height={200}
                         alt="Company logo"
                         >
                         </Image>
                    </div>
            </main>
        </>
    )
}