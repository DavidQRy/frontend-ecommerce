import React from 'react'
import { buttonVariants } from './ui/button'
import Link from 'next/link'

const BannerDicount = () => {
  return (
    <div className='p-5 sm:p-20 text-center'>
        <h2 className="uppercase font-black text-2xl text-primary">
            Consigue hasta hasta un -25%
        </h2>
        <h3 className="mt-3 font-semibold">
            20% al gastar $350.000 pesos 25% al gastar $450.000 pesos, Usa el codigo DavidQRy
        </h3>
        <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
            <Link href="#" className={buttonVariants()}>Compra</Link>
            <Link href="#" className={buttonVariants({variant: 'outline'})}>Más información</Link>
        </div>

    </div>
  )
}

export default BannerDicount