"use client"
import { useEffect, useState } from "react"

export function useGetCategories() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`
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