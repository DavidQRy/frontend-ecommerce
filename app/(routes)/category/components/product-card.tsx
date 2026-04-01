import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ProductType } from "@/types/products"
import Link from "next/link"
import { start } from "repl"

type productCardProps = {
    product: ProductType
}
export const ProductCard = (props: productCardProps) => {
    const { product } = props
    console.log(product)
    return (
        <Link href={`product/${product.slug}`} 
        className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md" >
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{product.taste}</p>
                <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full dark:bg-white dark:text-black w-fit">{product.origin}</p>
                <Carousel
                opts={{
                        align: "start"
                }}
                className="w-fu7 max-w-sm">
                    <CarouselContent>
                        {product.images?.map((image) => (
                            <CarouselItem key={image.id} className="group">
                                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`} alt="" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </Link> 
    )
}