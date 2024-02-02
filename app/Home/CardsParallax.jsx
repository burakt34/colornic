import React from 'react'

const CardsParallax = () => {
    return (
        <div className='px-4 md:px-20 w-full bg-msbg h-[2330px] relative'>
            <div className='h-full w-full sticky top-24'>
                <div className='flex justify-center items-center lg:w-[900px] xl:w-[1200px] mx-auto'>
                    <div className='absolute top-28'>
                        <img className='rounded-lg top-10 sticky w-[350px] md:w-[700px] h-96 mb-52' src="../Colornic_otelz_website_1_17303ddf6f.webp" alt="" />
                        <img className='rounded-lg sticky top-20 w-[350px] md:w-[700px] h-96 mb-52' src="../colornic_aradolu_logo_1_9ea311882d.webp" alt="" />
                        <img className='rounded-lg sticky top-32 w-[350px] md:w-[700px] h-96 mb-52' src="../colornic_erdem_hastanesi_work_1_2d7cc7a1eb.webp" alt="" />
                        <img className='rounded-lg sticky top-52 w-[350px] md:w-[700px] h-96 mb-52' src="../colornic_aradolu_logo_1_9ea311882d.webp" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardsParallax