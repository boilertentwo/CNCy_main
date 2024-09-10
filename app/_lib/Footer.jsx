import { Separator } from "@/components/ui/separator";
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";


export default function Footer(){
    return(
        <>
            <Separator/>
            <main className='h-24 w-full p-6 flex justify-around items-center flex-wrap gap-10'>
                <InstagramLogoIcon className="stroke-amber-400 size-6"/>
                <TwitterLogoIcon className="size-6 stroke-amber-400"/>
                <LinkedInLogoIcon className="size-6 stroke-amber-400"/>
            </main>
            
        </>
    )
}