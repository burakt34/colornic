"use client"
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "../globals.css"
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const SeviceSection = () => {

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

    const ServiceSection = [
        {
            MainTitle: "What We Do"
        },

        {
            ServiceSectionList: "Strategy,"

        },
        {
            ServiceSectionList: "Design,"

        },
        {
            ServiceSectionList: "Branding,"

        },
        {
            ServiceSectionList: "Development,"

        },
        {
            ServiceSectionList: "Development,"

        },
        {
            ServiceSectionList: "Development,"

        },
        {
            ServiceSectionList: "Development,"

        },
        {
            ServiceSectionList: "Development",

        },
        {
            ServiceSectionList: ["Android App,"]

        },
        {
            ServiceSectionList: ["E-commerce Front End,"]

        },
        {
            ServiceSectionList: ["Development,"]

        },
        {
            ServiceSectionList: ["Development,"]

        },

        {
            BottomTitle: "VIEW OR SERVİCES"
        },

    ]
    return (
        <div className='px-4 md:px-20 w-full md:min-h-screen bg-ssbg py-20 md:py-56 flex flex-col justify-between gap-10'>

            <div data-aos="fade-up" className={roboto.className}>
                {
                    ServiceSection.map((sc, ids) => (
                        <h2 className='text-6xl md:text-8xl lg:text-8xl text-white font-bold' key={ids}>{sc.MainTitle}</h2>
                    ))
                }
            </div>

            <div className='flex flex-wrap gap-2 md:gap-5' data-aos="fade-up" >
                {
                    ServiceSection.map((sc, ids) => (
                        <h2 className='text-3xl md:text-5xl text-white font-semibold cursor-pointer link link-underline link-underline-black' key={ids}>{sc.ServiceSectionList} </h2>
                    ))
                }
            </div>

            <div className=''>
                {
                    ServiceSection.map((sc, ids) => (
                        <h2 data-aos="fade-up" className='text-white tracking-widest hover:underline' key={ids}>{sc.BottomTitle} </h2>
                    ))
                }
            </div>
        </div>
    )
}

export default SeviceSection