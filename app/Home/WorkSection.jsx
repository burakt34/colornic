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
const WorkSection = () => {

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

    const workTitle = [
        {
            titleWork: "Our Work"
        },
    ]

    return (
        <div className='px-4 md:px-20 py-20 md:py-16 '>
            <div className="font-helvetica">
                <div data-aos="fade-up" className='mb-6'>
                    {
                        workTitle.map((wt, idw) => (
                            <h2 key={idw} className='text-6xl md:text-7xl xl:text-9xl font-bold'>{wt.titleWork}</h2>
                        ))
                    }
                </div>


                <div data-aos="fade-up" className='w-full h-auto  relative mb-10'>
                    <img className='flex md:hidden bg-contain rounded-3xl' src="../colornic_erdem_hastanesi_work_1_2d7cc7a1eb.webp" alt="" />
                    <div className='relative'>
                        <img className='w-full hidden md:flex bg-contain rounded-3xl transition duration-300 ease-in-out hover:scale-110' src="../Colornic_otelz_website_1_17303ddf6f.webp" alt="" />
                        <p className='p-8 absolute top-7 md:text-4xl font-bold opacity-0 hover:opacity-100 w-full h-full'>Erdem Hospital</p>
                    </div>

                </div>

                <div data-aos="fade-up" className='w-full h-auto relative'>
                    <img className='flex md:hidden bg-contain rounded-3xl' src="../colornic_aradolu_logo_work_1_1586286537.svg" alt="" />
                    <div className='relative'>
                        <img className='w-full hidden md:flex bg-contain rounded-3xl transition duration-300 ease-in-out hover:scale-110' src="../colornic_aradolu_logo_1_9ea311882d.webp" alt="" />
                        <p className='p-8 absolute top-7 md:text-4xl font-bold opacity-0 hover:opacity-100 w-full h-full'>Anadolu</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WorkSection