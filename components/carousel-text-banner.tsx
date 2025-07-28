'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Card, CardContent } from './ui/card'
import Autoplay from "embla-carousel-autoplay"

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envío en 24/48h",
        description: "Como cliente VIP, tus envíos en 24/48 horas. Obtén más información en tu área de cliente.",
        link: "#"
    },
    {
        id: 2,
        title: "Consigue hasta un 25% en compras superiores a 40€",
        description: "20% al gastar 100€ o 25% al gastar 200€. Usa el código VIP2023",
        link: "#"
    },
    {
        id: 3,
        title: "Devoluciones y entregas gratuitas",
        description: "Como cliente VIP, tienes envíos y devoluciones gratis en un plazo de 30 días.",
        link: "#"
    },
    {
        id: 4,
        title: "Compra novedades con descuento",
        description: "Todas las novedades al 50% de descuento durante la primera semana de lanzamiento.",
        link: "#"
    }
]

const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div className='bg-gray-200 dark:bg-primary'>
            <Carousel className='w-full max-w-4xl mx-auto'
                plugins={[
                    Autoplay({
                        delay: 2500
                    })
                ]}>
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, link, description }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className='cursor-pointer'>
                            <div>
                                <Card className='shadow-none border-none bg-transparent'>
                                    <CardContent className='flex flex-col justify-center p-2 items-center text-center'>
                                        <p className='sm:text-lg text-wrap dark:text-secondary'>{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CarouselTextBanner