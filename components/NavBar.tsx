'use client'; 

import { Heart, ShoppingCart, User } from 'lucide-react';
import { useRouter } from 'next/navigation'
import React from 'react'
import { MenuList } from './MenuList';


const NavBar = () => {
    const router = useRouter();
  return (
    <nav className='flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl'>
        <h1 className="text-3xl" onClick={() => router.push('/')}>
            David
            <span className="font-bold">
                QRy
            </span>
        </h1>
        <div className='items-center justify-between hidden sm:flex'>
            <MenuList/>
        </div>
        <div className="flex sm:hidden">
            <p>
                items menu
            </p>
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-7">
            <ShoppingCart strokeWidth={1} className='cursor-pointer' onClick={() => router.push('/cart')}/>
            <Heart strokeWidth={1} className='cursor-pointer' onClick={() => router.push('lowed-products')}/>
            <User strokeWidth={1} className='cursor-pointer' />
        </div>
    </nav>
  )
}

export default NavBar