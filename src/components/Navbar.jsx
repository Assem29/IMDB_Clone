import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-3'>
      <NavbarItem title="Trending" param="FetchTrend"/>
      <NavbarItem title="Top Rated" param="FetchData"/>

    </div>
  )
}
