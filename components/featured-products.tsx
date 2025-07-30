'use client'
import useGetFeatureProducts from '@/api/useGetFeatureProducts'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import SkeletonSchema from './SkeletonSchema'
import { ProductType } from '@/types/products'
import { Card, CardContent } from './ui/card'
import { Expand, ShoppingCart } from 'lucide-react'
import IconButton from './icon-button'
import { useRouter } from 'next/navigation'


export const FeactureProducts = () => {
  const { result, loading }: ResponseType = useGetFeatureProducts()
  const router = useRouter();
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
              const {slug, images, productName, taste, origin} = product
              return (
                <CarouselItem key={id} className='md:basis-1/2 lg:basis-1/3 group'>
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className='relative flex  flex-col items-center justify-end px-6 py-2'>
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`} alt="Image Featured"/>
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100">
                          <div className="flex justify-center gap-x-6">
                            <IconButton onClick={() => router.push(`product/${slug}`)} 
                            icon={<Expand/>}
                            className='text-gray-600'
                            />
                             <IconButton onClick={() => console.log('add item')} 
                            icon={<ShoppingCart/>}
                            className='text-gray-600'
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8">
                        <h3 className='text-lg font-bold'>{productName}</h3>
                        <div className="flex items-center justify-between gap-3">
                          <p className='px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit'>{taste}</p>
                          <p className='px-2 py-1 text-white bg-yellow-900 rounded-full w-fit'>{origin}</p>
                        </div>
                      </div>
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
