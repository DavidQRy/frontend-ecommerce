'use client'
import useGetCategoryProduct from "@/api/getCategoryProduct"
import { ResponseType } from "@/types/ResponseType"
import { useParams, useRouter } from "next/navigation"
import FiltersControlsCategory from "../components/filters-controls-category"
import { Separator } from "@/components/ui/separator"
import FilterOrigin from "../components/filter-origin"

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
        </div>
        </div>
    )
}