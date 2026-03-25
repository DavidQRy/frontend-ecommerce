'use client'
import useGetCategoryProduct from "@/api/getCategoryProduct"
import { ResponseType } from "@/types/ResponseType"
import { useParams, useRouter } from "next/navigation"
import FiltersControlsCategory from "../components/filters-controls-category"
import { Separator } from "@/components/ui/separator"
import FilterOrigin from "../components/filter-origin"
import SkeletonSchema from "@/components/SkeletonSchema"
import { ProductCard } from "../components/product-card"
import { ProductType } from "@/types/products"

export  default function Page () {
    const params = useParams()
    const {categorySlug} = params
    const {result, loading}: ResponseType = useGetCategoryProduct(categorySlug)
    console.log('data: ', result)
    const router = useRouter()
    return(
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
           {result !== null && !loading && (
            <h1 className="text-3xl font-medium">Café {
                result[0].category.categoryName
            }</h1>
        )}
        <Separator />

        <div className="sm:flex sm:justify-between">
            <FiltersControlsCategory/>
            <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10">
                {loading && (
                    <SkeletonSchema grid={3}/>
                )}
                { result != null && !loading && (
                    result.map((product: ProductType) => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                )}
            </div>
        </div>
        </div>
    )
}