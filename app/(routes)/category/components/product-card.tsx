import { ProductType } from "@/types/products"
import Link from "next/link"

type productCardProps = {
    product: ProductType
}
export const ProductCard = (props: productCardProps) => {
    const { product } = props
    return (
        <Link href={`product/${product.slug}`} 
        className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md" >
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                <p>{product.taste}</p>
            </div>
        </Link> 
    )
}