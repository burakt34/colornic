"use client"
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const MethodSection = () => {
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
  const MethodSection = [
    {
      titleMethodTop: "Our Design Methodology"
    },
    {
      titleMethodBottom: "UX Design Methods"
    },

  ]
  return (
    <div className='px-4 md:px-20 bg-csbg md:min-h-screen flex flex-col justify-center'>
      <div className={roboto.className}>
        {
          MethodSection.map((ms, idm) => (
            <div className='flex flex-col justify-between py-16 md:py-20'>
              <h2 data-aos="fade-up" className='text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tight' key={idm}>{ms.titleMethodTop}</h2>
              <h2 data-aos="fade-up" className='text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide'>{ms.titleMethodBottom}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MethodSection