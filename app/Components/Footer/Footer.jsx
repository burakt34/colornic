"use client"
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { LuArrowUpFromLine } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./../.././globals.css"



const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Footer = () => {

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1000,
    });
    AOS.refresh(
      {
        easing: 'ease-out-quad',
        duration: 1000,
      }
    );
  }, [])

  const Footer = [
    {
      FooterTopTitle: "Get in touch"
    },
    {
      FooterMidTitle: "Contact us for potential projects"
    },
    {
      FooterTel: "0555 555 55 55"
    },
    {
      FooterMail: "INFO@COLORNIC.COM"
    },
    {
      FooterLinks: ["Twitter" ]
    },
    {
      FooterLinks: ["Twitter"]
    },
    {
      FooterLinks: ["Twitter"]
    },
  ]
  return (
    <div className='  w-full h-[100vh] flex flex-col justify-between py-10 '>

      <div className={roboto.className}>
        <div data-aos="fade-up">
          <div className='px-4 md:px-20'>
            {
              Footer.map((ft, idf) => (
                <div className=''>
                  <h2 className='text-5xl md:text-7xl lg:text-9xl font-bold mt-6 tracking-wide' key={idf}>{ft.FooterTopTitle}</h2>
                  <h3 className='text-4xl md:text-5xl font-medium tracking-wide' >{ft.FooterMidTitle}</h3>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className='flex  justify-between'>
        <div className='px-4 md:px-20  block md:flex gap-20'>
          <div className={roboto.className}>
            {
              Footer.map((tel, idt) => (
                <div className='mb-4 md:mb-0 text-xl md:text-xl tracking-wider' key={idt}>{tel.FooterTel}</div>
              ))
            }
          </div>
          <div className={roboto.className}>
            {
              Footer.map((ml, idm) => (
                <div className='text-xl md:text-xl tracking-wider' key={idm}>{ml.FooterMail}</div>
              ))
            }
          </div>
        </div>

        <div className='relative md:w-60 cursor-pointer'>
          <div className='absolute right-[0] top-0 shadow-[0_2px_2px_4px_rgba(0.1,0.1,0.1,0.1)] rounded-s-full'>
            <div className='flex items-center justify-end p-3 gap-2'>
              <FaWhatsapp className='bg-green-500 text-white text-5xl p-1 rounded-full' />
              <p className='hidden md:flex tracking-tighter text-xl'>Live Support</p>
            </div>
          </div>
        </div>

      </div>



      <div className='flex flex-col-reverse  md:flex-row md:items-center md:justify-between w-full px-4 md:px-20'>

        <Link href="/" className='flex justify-center items-center gap-2'>
          <LuArrowUpFromLine className='text-2xl' />
          <p className='text-2xl font-semibold'>Back to top</p>
        </Link>
        {
          Footer.map((fl, idl) => (
            <div className={roboto.className}>
              <Link className='text-2xl font-normal !link !link-underline !link-underline-black' key={idl} href="/">{fl.FooterLinks}</Link>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Footer