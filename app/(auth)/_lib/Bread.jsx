import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function LoginBread(){
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
                            <BreadcrumbLink href='/login'>Login</BreadcrumbLink>
                        </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            </section>
        </>
    )
}