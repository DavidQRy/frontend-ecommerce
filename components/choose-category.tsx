"use client"
import { useGetCategories } from '@/api/getProducts'
import { categoryType } from '@/types/CategoryType'
import Link from 'next/link'
import React from 'react'
// import {ResponseType} from '@/types/response'

const ChooseCategory = () => {
  const { result, loading }: Response = useGetCategories()
  console.log(result)
  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16  sm:px-24'>
      <h3 className='px-6 pb-4 text-3xl sm:pb-8'>Elige tu Categoria favorita</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {!loading && result !== undefined && (
          result.map((category: categoryType) => (
            <Link key={category.id.toString()} href={`/category/${category.slug}`}
              className='relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg max-h-[458px] bg-amber-700'>
              <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`} alt={category.mainImage.alternativeText}
                className='max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110' />
                <p className='absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg'>{category.categoryName}</p>
            </Link>
          ))
        )}

      </div>
    </div>
  )
}

export default ChooseCategory