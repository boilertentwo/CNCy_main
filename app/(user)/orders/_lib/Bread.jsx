import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";


export function OrderBread(){
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
                            <BreadcrumbLink>Profile</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/orders'>Your orders</BreadcrumbLink>
                        </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            </section>
        </>
    )
}