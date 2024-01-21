import { Roboto } from 'next/font/google'
import React from 'react'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Menu = () => {
  return (
    <div className={roboto.className}>
      <div className='text-2xl font-light cursor-pointer'>Menu</div>
    </div>
  )
}

export default Menu