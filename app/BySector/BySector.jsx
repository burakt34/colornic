import Link from 'next/link'
import React from 'react'
import { PiArrowLineUpRight } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";

const BySector = () => {
    return (
        <div className='mt-24 h-[80vh] md:min-h-screen w-full font-helvetica'>
            <div className='px-4 md:px-20 mt-[120px] mb-10'>
                <h2 className='text-[120px] font-bold mb-10'>Work</h2>
                <div className='flex md:w-3/6 justify-between items-center'>
                    <Link className='md:text-2xl hover:underline transition-all delay-1000' href="/work">All Case Studies</Link>
                    <Link className='text-xl md:text-2xl underline hover:underline transition-all delay-1000' href="/BySector">By Sector</Link>
                    <Link className='md:text-2xl hover:underline transition-all delay-1000' href="/ByService">By Service</Link>
                </div>
            </div>

            <div className='px-4 md:px-20'>
                <div className='md:flex gap-10'>
                    <div className='mb-20 md:mb-0'>
                        <img src="work-31.png" alt="" />
                    </div>
                    <div className='mb-20 md:mb-0'>
                        <img src="work-32.png" alt="" />
                    </div>
                    <div className='mb-20 md:mb-0'>
                        <img src="work-3.png" alt="" />
                    </div>
                </div>

                <div className='md:flex gap-10 md:mt-20'>
                    <div className='mb-20 md:mb-0'>
                        <img src="work-21.png" alt="" />
                    </div>
                    <div className='mb-20 md:mb-0'>
                        <img src="work-22.png" alt="" />
                    </div>
                    <div className='mb-20 md:mb-0'>
                        <img src="work-23.png" alt="" />
                    </div>
                </div>

                <div className='md:flex gap-10 md:mt-20'>
                    <div className='mb-20 md:mb-0'>
                        <img src="work-311.png" alt="" />
                    </div>
                    <div className='mb-20 md:mb-0'>
                        <img src="work-322.png" alt="" />
                    </div>
                    <div className='mb-20 md:mb-0'>
                        <img src="work-333.png" alt="" />
                    </div>
                </div>

                <div className='md:flex gap-10 md:mt-20'>
                    <div>
                        <img src="work-41.png" alt="" />
                    </div>

                </div>
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

export default BySector