import { Roboto } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Menu = () => {
  return (
    <div className={roboto.className}>
      <div className='text-2xl font-light cursor-pointer'><Link href="/MenuSection">Menu</Link></div>
    </div>
  )
}

export default Menu