import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

const BannerProducts = () => {
    return (
        <>
            <div className='mt-4 text-center'>
                <p>Sumérgete en una experiencia única</p>
                <h4 className="mt-2 text-5xl font-extrabold uppercase">Café Exqusito</h4>
                <p className="my2 text-lg">Despierta tus sentidos con cada sabor</p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[300px] bg-cover lg:h-[600px] bg-[url('/slider-image.jpg')] bg-cover bg-center mt-5"></div>
        </>
    )
}

export default BannerProducts