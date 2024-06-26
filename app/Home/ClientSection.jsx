"use client"
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Roboto } from 'next/font/google';



const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
})


const ClientSection = () => {

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
    const ClientSection = [
        {
            clientSection: "Some of our clients"
        },
        {
            clientBottomTitle: "VIEW ALL CLIENTS"
        },

    ]
    return (

        <div className='bg-msbg px-4 md:px-20 w-full py-24 flex flex-col justify-between'>
            <div className="font-helvetica">
                <div className='md:mb-10'>
                    {
                        ClientSection.map((mc, idm) => (
                            <h2 data-aos="fade-up" className='text-4xl md:text-6xl 2xl:text-7xl  text-white tracking-tight font-semibold' key={idm}>{mc.clientSection}</h2>
                        ))
                    }
                </div>
                <div className='flex flex-wrap w-full gap-5 md:gap-14 2xl:gap-20 md:mb-10 mb-6 mt-7 md:mt-0'>
                    <img data-aos="fade-up" className='w-44 md:w-60 2xl:w-80 p-2 !opacity-45 !hover:opacity-100 cursor-pointer' src="../Union.svg" alt="" />
                    <img data-aos="fade-up" className='w-44 md:w-60 2xl:w-80 p-2 !opacity-45 !hover:opacity-100 cursor-pointer' src="../Union1.svg" alt="" />
                    <img data-aos="fade-up" className='w-44 md:w-60 2xl:w-80 p-2 !opacity-45 !hover:opacity-100 cursor-pointer' src="../Union (1).svg" alt="" />
                    <img data-aos="fade-up" className='w-44 md:w-60 2xl:w-80 p-2 !opacity-45 !hover:opacity-100 cursor-pointer' src="../Union (2).svg" alt="" />
                    {/* <img data-aos="fade-up" className='w-44 md:w-60 2xl:w-80 p-2 !opacity-45 !hover:opacity-100 cursor-pointer' src="../Tonguc_magaza_logo_white_f52d2c94cf.svg" alt="" />
                    <img data-aos="fade-up" className='w-44 md:w-60 2xl:w-80 p-2 !opacity-45 !hover:opacity-100 cursor-pointer' src="../Tonguc_magaza_logo_white_f52d2c94cf.svg" alt="" />
                    <img data-aos="fade-up" className='w-44 md:w-60 2xl:w-80 p-2 !opacity-45 !hover:opacity-100 cursor-pointer' src="../Tonguc_magaza_logo_white_f52d2c94cf.svg" alt="" /> */}
                </div>
                <div className=''>
                    {
                        ClientSection.map((mc, idm) => (
                            <h2 className='text-xl 2xl:text-2xl  text-white tracking-widest' key={idm}>{mc.clientBottomTitle}</h2>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default ClientSection