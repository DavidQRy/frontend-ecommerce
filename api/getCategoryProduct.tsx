import { useEffect, useState } from "react"

export default function useGetCategoryProduct(slug: string | string[] ) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState('')

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResult(json.data)
                setLoading(false)
            } catch (error: any) {
                setErr(error)
                setLoading(false)
            }
        })()
    },[url])

    return { loading, result, err}
}