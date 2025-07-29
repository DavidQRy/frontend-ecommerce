'use client'
import useGetFeatureProducts from '@/api/useGetFeatureProducts'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import SkeletonSchema from './SkeletonSchema'
import { ProductType } from '@/types/products'
import { Card, CardContent } from './ui/card'

export const FeactureProducts = () => {
  const { result, loading }: ResponseType = useGetFeatureProducts()
  console.log(result)
  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-6 sm.px-24'>
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className='ml-2 md:ml-4'>
          {loading && (
            <SkeletonSchema grid={3} />
          )}
          {result !== null && (
            result.map((product: ProductType) => {
              const {atributes, id} = product
              const {slug, images, productName, taste} = product
              return (
                <CarouselItem key={id} className='md:basis-1/2 lg:basis-1/3 group'>
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className='relative flex items-center justify-center px-6 py-2'>
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`} alt="" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })
          )}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
