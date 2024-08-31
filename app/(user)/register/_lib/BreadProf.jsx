import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";


export function ProfileBread(){
    return(
        <>
        <section className="h-10 w-full flex items-center px-4">
            <Breadcrumb>
                <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/profile'>Profile</BreadcrumbLink>
                        </BreadcrumbItem>
                        
                </BreadcrumbList>
            </Breadcrumb>
            </section>

        </>
    )
}