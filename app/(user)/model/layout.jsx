import Footer from "@/components/Footer"

export const metadata = {
    title: 'Gallery | orderBook',
    description: 'CNCy | Craft and carve.'
}

export default function ModelLayout({children}){
    return(
        <>
            <main>
                {children}
                
            </main>
        </>
    )
}