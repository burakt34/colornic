"use client"
import { Inter, Roboto } from 'next/font/google'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import '.././globals.css'


const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const HomeSection = () => {

    const titles = ['Brand', 'Social Media', 'WebSite', 'Video']; // Değişen başlıklar

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 1000); // Her 3 saniyede bir başlık değişimi

        return () => clearInterval(interval);
    }, []);


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

    const HomeSec = [
        {
            titleTop: "User-Centered"
        },
        {

            titleList:
                [
                    "List alanı"
                ]
        },

        {
            titleBottom: "communication"
        },
    ]
    return (
        <div className='px-4 md:px-20 w-full h-[41vh] md:h-[81vh]'>
            <div className={inter.className}>
                <div className='flex flex-col !justify-center h-[41vh] md:h-[81vh] mt-28 md:mt-40 gap-1 md:gap-2'>

                    {
                        HomeSec.map((homesect, idh) => (
                            <div className='w-full md:w-4/5'>
                                <p data-aos="fade-up" className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold' key={idh}>{homesect.titleTop}</p>
                            </div>
                        ))
                    }
                    <p data-aos="fade-up" className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold'>
                        {titles[currentTitleIndex]}
                    </p>
                    {
                        HomeSec.map((homesect, idh) => (
                            <div className=''>
                                <p data-aos="fade-down" className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold' key={idh}>{homesect.titleBottom}</p>
                            </div>
                        ))
                    }


                </div>
            </div>

        </div>

    )
}

export default HomeSection