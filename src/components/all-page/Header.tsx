import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='flex items-center justify-between p-5 bg-slate-200/60 mx-5 rounded-lg sticky top-0 z-10 backdrop-blur-sm'>
        <h1 className='font-play text-2xl sm:text-3xl'>Data Fetchify</h1>
        <div className='md:hidden'>
          <Button variant={"ghost"}>🏐</Button>
        </div>
        <ul className='font-poppins md:flex gap-6 hidden'>
            <li className='hover:text-rose-500'><Link href={"/"}>Home</Link></li>
            <li className='hover:text-rose-500'><Link href={"/clientSide"}>Client Side Fetching</Link></li>
            <li className='hover:text-rose-500'><Link href={"/serverSide"}>Server Side Fetching</Link></li>
        </ul>
    </header>
  )
}

export default Header