import { Roboto } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})
const Logo = () => {
  const Logo = [
    {
        Logo: "colornic"
    },
]
  return (
    <Link href="/" className={roboto.className}>
        
          {
            Logo.map((lg,idl)=>(
              <p className='text-4xl !font-bold font-mono tracking-tighter cursor-pointer' key={idl}>{lg.Logo}</p>
            ))
          }
        
    </Link>
  )
}

export default Logo