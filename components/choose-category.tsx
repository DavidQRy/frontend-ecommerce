"use client"
import { useGetCategories } from '@/api/getProducts'
import Link from 'next/link'
import React from 'react'
// import {ResponseType} from '@/types/response'

const ChooseCategory = () => {
    const {result, loading}: any = useGetCategories()
    console.log(result)
  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16  sm:px-24'>
        <h3  className='px-6 pb-4 text-3xl sm:pb-8'>Elige tu Categoria favorita</h3>
        {!loading && result !== undefined && (
            result.map((category: any) => (
                <Link key={category.id} href={`/category/${category.atributes.slug}`}
                className='relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg '></Link>            ))
        )}
    </div>
  )
}

export default ChooseCategory