import Link from 'next/link'
import React from 'react'
import { PiArrowLineUpRight } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";

const WorkPage = () => {
    return (
        <div className='mt-24 h-[80vh] md:min-h-screen w-full font-helvetica'>
            <div className='px-4 md:px-20 mt-[120px]'>
                <h2 className='text-[120px] font-bold mb-10'>Work</h2>
                <div className='flex md:w-3/6 justify-between items-center'>
                    <Link className='text-xl md:text-2xl underline hover:underline transition-all delay-1000' href="/work">All Case Studies</Link>
                    <Link className='md:text-2xl hover:underline transition-all delay-1000' href="/BySector">By Sector</Link>
                    <Link className='md:text-2xl hover:underline transition-all delay-1000' href="/ByService">By Service</Link>
                </div>
                <h2 className='text-[60px] font-bold my-10'>Our latest</h2>

                <div className='mb-20'>
                    <img className='rounded-xl w-full' src="./work1.png" alt="" />
                    <h4 className='mt-6 mb-4 text-2xl font-medium'>Erdem Hospital — Corporate Responsive Website</h4>
                    <div className='md:flex text-[16px] font-normal space-x-4 text-gray-600'>
                        <p>Website</p>
                        <p>Experience Design</p>
                        <p>Prototyping</p>
                        <p>Interaction Design</p>
                        <p>Web Application</p>
                    </div>
                </div>

                <div className='md:flex gap-10 2xl:justify-center'>
                    <div>
                        <img className='md:w-[400px] h-[507px] rounded-xl ' src="./work2.png" alt="" />
                        <h4 className='mt-6 mb-4 text-2xl font-medium'>Medient KBB — Medient Ear Nose and Throat Hospital Posters</h4>
                        <div className='flex text-[16px] font-normal space-x-4 text-gray-600'>
                            <p>Branding</p>
                            <p>Health</p>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-0'>
                        <img className='rounded-xl md:h-[507px] bg-cover' src="./work3.png" alt="" />
                        <h4 className='mt-6 mb-4 text-2xl font-medium'>Tonguç Akademi — Tonguc Magaza E-Commerce Website</h4>
                        <div className='flex text-[16px] font-normal space-x-4 text-gray-600'>
                            <p>Website</p>
                            <p>Interface Design</p>
                            <p>Icon Design</p>
                        </div>
                    </div>
                </div>
                <div className='mt-20 2xl:flex items-center justify-center'>
                    <div className='md:flex gap-10'>
                        <div className='mb-20 md:mb-0'>
                            <img src="work_main11.png" alt="" />
                        </div>
                        <div className='mb-20 md:mb-0'>
                            <img src="work_main12.png" alt="" />
                        </div>
                        <div className='mb-20 md:mb-0'>
                            <img src="work_main13.png" alt="" />
                        </div>
                    </div>
                </div>

                <h3 className='flex w-full items-center justify-center text-[16px] font-medium underline mb-[120px] tracking-wider mt-[67px] cursor-pointer'>FEATURED WORK</h3>


            </div>

            
            <div className='py-[120px] bg-[#F2F2F2] w-full px-4 md:px-20 mt-20'>
                <h2 className='text-7xl md:text-[120px] font-bold'>Get in touch.</h2>
                <h4 className='text-5xl md:text-[54px] font-medium'>Contact us for potential projects</h4>

                <div className='md:flex md:space-x-[120px] mt-[56px]'>
                    <p className='text-base font-medium md:tracking-[8px]'>0555 811 68 13</p>
                    <p className='text-base font-medium md:tracking-[8px]'>INFO@COLORNIC.com</p>
                </div>
            </div>


            <div className='px-4 md:px-20 pt-10 pb-6 w-full flex justify-between'>


                <div>
                    <div className='flex items-center gap-4'>
                        <div className='w-[18px] h-[18px]'>
                            <PiArrowLineUpRight width={18} height={18} />
                        </div>

                        <p className='underline text-base font-normal cursor-pointer'>Text Link</p>
                        <div className='w-[18px] h-[18px]'>
                            <IoIosArrowRoundForward width={18} height={18} />

                        </div>

                    </div>
                </div>



                <div className='md:flex gap-6'>
                    <div>
                        <div className='flex items-center gap-4'>
                            <div className='w-[18px] h-[18px]'>
                                <PiArrowLineUpRight width={18} height={18} />
                            </div>

                            <p className='underline text-base font-normal cursor-pointer'>Text Link</p>
                            <div className='w-[18px] h-[18px]'>
                                <IoIosArrowRoundForward width={18} height={18} />

                            </div>

                        </div>
                    </div>


                    <div className='flex items-center gap-4'>
                        <div className='w-[18px] h-[18px]'>
                            <PiArrowLineUpRight width={18} height={18} />
                        </div>

                        <p className='underline text-base font-normal cursor-pointer'>Text Link</p>
                        <div className='w-[18px] h-[18px]'>
                            <IoIosArrowRoundForward width={18} height={18} />

                        </div>

                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='w-[18px] h-[18px]'>
                            <PiArrowLineUpRight width={18} height={18} />
                        </div>

                        <p className='underline text-base font-normal cursor-pointer'>Text Link</p>
                        <div className='w-[18px] h-[18px]'>
                            <IoIosArrowRoundForward width={18} height={18} />

                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default WorkPage