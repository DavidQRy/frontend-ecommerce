import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ItemsMenuMobile = () => {
  return (
    <Popover>
        <PopoverTrigger>
            <Menu/>
        </PopoverTrigger>
        <PopoverContent>
            <Link href={'/categories/cafe-molido'} className='block'>Café Molido</Link>
            <Link href={'/categories/cafe-grano'} className='block'>Café en Grano</Link>
            <Link href={'/categories/cafe-capsulas'} className='block'>Café en cápsulas</Link>
        </PopoverContent>
    </Popover>
  )
}

export default ItemsMenuMobile