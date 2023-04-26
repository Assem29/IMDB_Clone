import React from 'react'
import Link from 'next/link'
import MenuItems from './MenuItems'
import {FiHome} from 'react-icons/fi'
import {AiOutlineInfoCircle} from 'react-icons/ai'

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
      <div className="flex">
<MenuItems title="HOME" address="/" Icon={FiHome}/>
<MenuItems title="ABOUT" address="/about" Icon={AiOutlineInfoCircle}/>

      </div>
      <div className="">
<Link href='/'>
  <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span><span className='text-xl hidden sm:inline'>Clone</span></h2>
</Link>
      </div>
    </div>
  )
}
