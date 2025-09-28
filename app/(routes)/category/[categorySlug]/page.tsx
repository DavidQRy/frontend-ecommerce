'use client'
import useGetCategoryProduct from "@/api/getCategoryProduct"
import { ResponseType } from "@/types/ResponseType"
import { useParams, useRouter } from "next/navigation"

export  default function Page () {
    const params = useParams()
    const {categorySlug} = params
    const {result, loading}: ResponseType = useGetCategoryProduct(categorySlug)
    console.log('data: ', result)
    const router = useRouter()
    return(
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {/* {result !== null && !loading && (result)} */}
        </div>
    )
}