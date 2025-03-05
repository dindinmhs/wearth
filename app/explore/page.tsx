import { NavbarDashboard, NavbarMobile } from "@/components/organism"
import { ProductCard } from "@/components/products"
import { Products } from "@/data/products"
import Link from "next/link"

const explorePage = () => { 
    return (
        <>
            <NavbarDashboard/>
            <NavbarMobile/>
            <main className="pb-16 w-11/12 mx-auto">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-8">
                    <div className="h-[100vh] md:sticky top-24 pt-24 md:pt-0">
                        ini filter
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-24">
                        {Products.map((product) => (
                            <Link href={`/products/${product.id}`} key={product.id}>
                                <ProductCard {...product} />
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
 }

export default explorePage