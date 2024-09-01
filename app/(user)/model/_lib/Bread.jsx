import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function ModelBread(){
    return(
        <>
            <section className="lg:hidden h-10 w-full flex items-center px-4">
            <Breadcrumb>
                <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/model'>Gallery</BreadcrumbLink>
                        </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            </section>
        </>
    )
}