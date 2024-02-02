"use client"
import Link from 'next/link'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { PiArrowLineUpRight } from "react-icons/pi";
import { LuArrowUpFromLine} from "react-icons/lu";

const ContactFooter = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quad',
            duration: 1000,
        });
        AOS.refresh(
            {
                easing: 'ease-out-quad',
                duration: 500,
            }
        );
    }, [])
    return (
        <div className='mx-4 md:mx-20 mt-20 xl:mt-40 font-helvetica'>
            <h3 data-aos="fade-up" className='text-4xl font-semibold'>Address</h3>
            <p data-aos="fade-up" className='mt-10 text-3xl text-gray-700'>Meydan İstanbul AVM Fatih Sultan Mehmet Mah. Balkan Cd. No:62, 34770 <br />
                Ümraniye - İSTANBUL
            </p>
            <div className=' md:flex lg:gap-60 xl:gap-96 mt-20'>
                <div className='mb-20 md:mb-0'>
                    <h3 data-aos="fade-up" className='text-4xl font-semibold mb-5'>Official</h3>
                    <p data-aos="fade-up" className='text-2xl md:text-3xl text-gray-700'>Ender Beytekin</p>
                    <p data-aos="fade-up" className='text-2xl md:text-3xl text-gray-700'>+90 555 811 68 13</p>
                    <p data-aos="fade-up" className='text-2xl md:text-3xl text-gray-700'>ender.beytekin@colornic.com</p>
                </div>
                <div className=''>
                    <h3 data-aos="fade-up" className='text-4xl font-semibold mb-5'>Institutional</h3>
                    <p data-aos="fade-up" className='text-2xl md:text-3xl text-gray-700'>Advice</p>
                    <p data-aos="fade-up" className='text-2xl md:text-3xl text-gray-700'>+90 216 807 02 65</p>
                    <p data-aos="fade-up" className='text-2xl md:text-3xl text-gray-700'>iletisim@colornic.com</p>
                </div>
            </div>

            <div  className='relative bottom-0 py-8 mt-10'>
                <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center'>
                    <div className='flex items-center gap-2 mt-10 md:mt-0'>
                        <LuArrowUpFromLine className='text-2xl' />
                        <Link className='text-2xl ' href="/Contact">Back to top</Link>

                    </div>

                    <div className='md:flex gap-8'>
                        <Link  className=' text-xl md:text-2xl tracking-wide flex items-center justify-start gap-2' href="https://twitter.com"><PiArrowLineUpRight className='text-xl md:text-2xl' />
                            Twitter</Link>
                        <Link  className='text-xl md:text-2xl tracking-wide flex items-center justify-start gap-2' href="https://www.linkedin.com/"><PiArrowLineUpRight className='text-xl md:text-2xl' />Linkedln</Link>
                        <Link  className='text-xl md:text-2xl tracking-wide flex items-center justify-start gap-2' href="https://instagram.com"><PiArrowLineUpRight className='text-xl md:text-2xl' />Instagram</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFooter