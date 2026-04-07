import IconButton from "@/components/icon-button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ProductType } from "@/types/products"
import { Expand, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { start } from "repl"

type productCardProps = {
    product: ProductType
}
export const ProductCard = (props: productCardProps) => {
    const { product } = props;

    return (
        <Link href={`/product/${product.slug}`} 
            className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md border block"
        >
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[10] top-4 w-full left-0 right-0">
                <div className="flex gap-2 ml-2">
                    <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                        {product.taste}
                    </p>
                    <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
                        {product.origin}
                    </p>
                </div>
            </div>
            <div className="mt-2">
                <Carousel
                    opts={{ align: "start" }}
                    className="w-full"
                >
                    <CarouselContent>
                        {product.images?.map((image) => (
                            <CarouselItem key={image.id} className="group relative">
                                <img 
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`} 
                                    alt={product.productName || "Imagen de producto"}
                                    className="rounded-xl object-cover aspect-square w-full" 
                                />
                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5 z-20">
                                    <div className="flex justify-center gap-x-6">
                                        <IconButton 
                                            onClick={(e) => { e.preventDefault(); console.log("Expand"); }} 
                                            icon={<Expand size={20} className="text-gray-600"/>}
                                        />
                                        <IconButton 
                                            onClick={(e) => { e.preventDefault(); console.log("Cart"); }} 
                                            icon={<ShoppingCart size={20} className="text-gray-600"/>}
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="mt-4 px-2">
                <h3 className="font-bold text-lg">{product.productName}</h3>
            </div>
        </Link> 
    );
}