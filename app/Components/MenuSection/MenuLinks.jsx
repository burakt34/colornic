import Link from 'next/link'
import React from 'react'
import { PiArrowLineUpRight } from "react-icons/pi";



const MenuLinks = () => {
    // const MenuLinks = [
    //     {
    //         MenuLinksTwitter: "Twitter"
    //     },
    //     {
    //         MenuLinksLinkedln: "Linkedln"
    //     },
    //     {
    //         MenuLinksInstagram: "Instagram"
    //     },
    // ]
    return (
        <div className='px-4 md:px-20 fixed bottom-6 right-0'>
            <div className='flex justify-center items-center gap-1 md:gap-8 font-helvetica'>
                <Link className='text-xl md:text-2xl tracking-wide flex items-center justify-center gap-2' href="https://twitter.com"><PiArrowLineUpRight className='text-xl md:text-2xl' />
                    Twitter</Link>
                <Link className='text-xl md:text-2xl tracking-wide flex items-center justify-center gap-2' href="https://www.linkedin.com/"><PiArrowLineUpRight className='text-xl md:text-2xl' />Linkedln</Link>
                <Link className='text-xl md:text-2xl tracking-wide flex items-center justify-center gap-2' href="https://instagram.com"><PiArrowLineUpRight className='text-xl md:text-2xl' />Instagram</Link>
            </div>
        </div>
    )
}

export default MenuLinks