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
    <Link href="/" className="font-helvetica">
          {/* {
            Logo.map((lg,idl)=>(
              <p className='text-4xl !font-bold font-mono tracking-tighter cursor-pointer' key={idl}>{lg.Logo}</p>
            ))
          } */}
        <img className='w-36 h-9' src="../colornic2.svg" alt="" />
    </Link>
  )
}

export default Logo