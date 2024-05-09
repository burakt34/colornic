import React from 'react'
import '.././globals.css'


const Blog = () => {
    return (
        <div className='px-4 md:px-20 py-16 md:py-[120px] w-full min-h-screen'>
            <h2 className='text-5xl md:text-7xl font-bold'>Blog</h2>
            <div className='md:flex w-full overflow-x-auto no-scrollbar mt-10 gap-10' >
                <div>
                    <div className='flex flex-col w-full mb-7 md:mb-0 md:w-[620px]'>
                        <img className='rounded-xl' src="../illustration-kacper-swat-feature.png" alt="" />
                        <div className='flex justify-between mt-5'>
                            <p>UX</p>
                            <p>8dk Reading time</p>
                        </div>
                        <div className=''>
                            <p className='text-black text-3xl font-medium'>
                                The impact of the pandemic on the hospitality industry – Flat Earth Pizzas.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col mb-7 md:mb-0 md:w-[620px]'>
                        <img className='rounded-xl' src="../illustration-kacper-swat-feature.png" alt="" />
                        <div className='flex justify-between mt-5'>
                            <p>UX</p>
                            <p>8dk Reading time</p>
                        </div>
                        <div className=''>
                            <p className='text-black text-3xl font-medium'>
                                The impact of the pandemic on the hospitality industry – Flat Earth Pizzas.
                            </p>
                        </div>
                    </div>
                </div>


                <div>
                    <div className='flex flex-col md:w-[620px]'>
                        <img className='rounded-xl' src="../illustration-kacper-swat-feature.png" alt="" />
                        <div className='flex justify-between mt-5'>
                            <p>UX</p>
                            <p>8dk Reading time</p>
                        </div>
                        <div className=''>
                            <p className='text-black text-3xl font-medium'>
                                The impact of the pandemic on the hospitality industry – Flat Earth Pizzas.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog