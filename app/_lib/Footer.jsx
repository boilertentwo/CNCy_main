import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";


export default function Footer(){
    return(
        <>
            <main className='h-48 w-full flex justify-between items-center flex-wrap gap-10'>
                <InstagramLogoIcon/>
                <TwitterLogoIcon/>
                <LinkedInLogoIcon/>
            </main>
            
        </>
    )
}