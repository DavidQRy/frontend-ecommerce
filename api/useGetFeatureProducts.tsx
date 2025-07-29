import { error } from "console"
import { use, useEffect, useState } from "react"

const useGetFeatureProducts = () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeature][$eq]=true&populate=*`
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState("") 

    useEffect(() => {
       (async() => {
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
    }, [url])
    return {loading, result , err}
}

export default useGetFeatureProducts