"use client"
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';




const ServicesList = () => {

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
    return (
        <div className='px-2 md:px-20 w-full bg-black text-white font-helvetica py-28'>
            <h2 data-aos="fade-up" className='text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-20'>Our Capabilities</h2>
            <div className='p-0 px-2 lg:px-28 lg:min-h-screen gap-20'>
                <div data-aos="fade-up" className='md:flex md:gap-16 xl:gap-32'>
                    <img data-aos="fade-up" className='' src="../square.svg" />
                    <div className='mt-16 md:mt-0'>
                        <h4 data-aos="fade-up" className='text-4xl lg:text-7xl font-bold mb-9 md:mb-12'>Strategy</h4>
                        <div className='flex flex-col !justify-between text-2xl lg:text-3xl xl:text-5xl'>
                            <p data-aos="fade-up">Strategy And Creativity</p>
                            <p data-aos="fade-up">Digital Strategy</p>
                            <p data-aos="fade-up">Brand Activations</p>
                            <p data-aos="fade-up">Growth Strategy</p>
                            <p data-aos="fade-up">Creative Concepts</p>
                            <p data-aos="fade-up">Business Models</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='p-0 px-2 lg:px-28 lg:min-h-screen gap-20 mt-20 lg:mt-0'>
                <div data-aos="fade-up" className='md:flex md:gap-16 xl:gap-32'>
                    <img className='' src="../triangle.svg" />
                    <div className='mt-16 md:mt-0'>
                        <h4 data-aos="fade-up" className='text-4xl lg:text-7xl font-bold mb-9 md:mb-12'>Design And User Experience</h4>
                        <div data-aos="fade-up" className='flex flex-col !justify-between text-2xl lg:text-3xl xl:text-5xl'>
                            <p data-aos="fade-up">Strategy And Creativity</p>
                            <p data-aos="fade-up">Digital Strategy</p>
                            <p data-aos="fade-up">Brand Activations</p>
                            <p data-aos="fade-up">Growth Strategy</p>
                            <p data-aos="fade-up">Creative Concepts</p>
                            <p data-aos="fade-up">Business Models</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='p-0 px-2 lg:px-28 lg:min-h-screen gap-20 mt-20 lg:mt-0'>
                <div className='md:flex md:gap-16 xl:gap-32'>
                    <img data-aos="fade-up" className='' src="../polygon.svg" />
                    <div className='mt-16 md:mt-0'>
                        <h4 data-aos="fade-up" className='text-4xl lg:text-7xl font-bold mb-9 md:mb-12'>Design And User Experience</h4>
                        <div className='flex flex-col !justify-between text-2xl lg:text-3xl xl:text-5xl'>
                            <p data-aos="fade-up">Strategy And Creativity</p>
                            <p data-aos="fade-up">Digital Strategy</p>
                            <p data-aos="fade-up">Brand Activations</p>
                            <p data-aos="fade-up">Growth Strategy</p>
                            <p data-aos="fade-up">Creative Concepts</p>
                            <p data-aos="fade-up">Business Models</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='p-0 px-2 lg:px-28 lg:min-h-screen gap-20 mt-20 lg:mt-0'>
                <div data-aos="fade-up" className='md:flex md:gap-16 xl:gap-32'>
                    <img data-aos="fade-up" className='' src="../triangle.svg" />
                    <div className='mt-16 md:mt-0'>
                        <h4 data-aos="fade-up" className='text-4xl lg:text-7xl font-bold mb-9 md:mb-12'>Design And User Experience</h4>
                        <div className='flex flex-col !justify-between text-2xl lg:text-3xl xl:text-5xl'>
                            <p data-aos="fade-up">Strategy And Creativity</p>
                            <p data-aos="fade-up">Digital Strategy</p>
                            <p data-aos="fade-up">Brand Activations</p>
                            <p data-aos="fade-up">Growth Strategy</p>
                            <p data-aos="fade-up">Creative Concepts</p>
                            <p data-aos="fade-up">Business Models</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className='p-0 px-2 lg:px-28 lg:min-h-screen gap-20 mt-20 lg:mt-0'>
                <div data-aos="fade-up" className='md:flex md:gap-16 xl:gap-32'>
                    <img data-aos="fade-up" className='' src="../polygon.svg" />
                    <div className='mt-16 md:mt-0'>
                        <h4 data-aos="fade-up" className='text-4xl lg:text-7xl font-bold mb-9 md:mb-12'>Design And User Experience</h4>
                        <div className='flex flex-col !justify-between text-2xl lg:text-3xl xl:text-5xl'>
                            <p data-aos="fade-up" >Strategy And Creativity</p>
                            <p data-aos="fade-up" >Digital Strategy</p>
                            <p data-aos="fade-up" >Brand Activations</p>
                            <p data-aos="fade-up" >Growth Strategy</p>
                            <p data-aos="fade-up" >Creative Concepts</p>
                            <p data-aos="fade-up" >Business Models</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesList