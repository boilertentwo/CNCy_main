import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function ItemIdBread({modelId, itemId}){
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
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/model/${modelId}`}>{modelId}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/model/${modelId}/${itemId}`}>{itemId}</BreadcrumbLink>
                        </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            </section>
        </>
    )
}