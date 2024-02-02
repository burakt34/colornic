import Link from 'next/link'
import React from 'react'
import "../../globals.css"

const MenuHome = () => {
    return (
        <div className='px-4 md:px-20 w-full min-h-screen'>
            <div className='mt-40 flex flex-col gap-5'>
                <Link className='text-7xl md:text-8xl 2xl:text-9xl font-semibold font-helvetica ' href="/"><p className='inline-block linkbl linkbl-underline linkbl-underline-black'>Home</p></Link>
                <Link className='text-7xl md:text-8xl 2xl:text-9xl font-semibold font-helvetica ' href="/work"><p className='inline-block linkbl linkbl-underline linkbl-underline-black'>Work</p></Link>
                <Link className='text-7xl md:text-8xl 2xl:text-9xl font-semibold font-helvetica ' href="/Services"><p className='inline-block linkbl linkbl-underline linkbl-underline-black'>Sevices</p></Link>
                <Link className='text-7xl md:text-8xl 2xl:text-9xl font-semibold font-helvetica ' href="/about"><p className='inline-block linkbl linkbl-underline linkbl-underline-black'>About</p></Link>
                <Link className='text-7xl md:text-8xl 2xl:text-9xl font-semibold font-helvetica ' href="/Contact"><p className='inline-block linkbl linkbl-underline linkbl-underline-black'>Contact</p></Link>

            </div>
        </div>
    )
}

export default MenuHome