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

const MoreLink = () => {
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

    const MoreLink = [
        {
            moreLink: "FEATURED WORK"
        },

    ]
    return (
        <div className='px-4 md:px-20 mt-6 flex justify-center items-center w-full p-16'>
            <div className={roboto.className}>
                {
                    MoreLink.map((ml, idm) => (
                        <h2 data-aos="fade-up" className='text-2xl font-semibold tracking-widest leading-normal uppercase cursor-pointer' key={idm}>{ml.moreLink}</h2>
                    ))
                }
            </div>
        </div>
    )
}

export default MoreLink