import React from 'react'

const Desing = () => {
    return (
        <div className='px-2 md:px-20 py-20 font-helvetica'>
            <div className='h-[30vh] flex justify-between flex-col'>
                <h2 className='text-5xl lg:text-7xl font-semibold tracking-tight'>Design Thinking</h2>
                <h3 className='text-4xl lg:text-6xl'>A Framework For Innovation</h3>
            </div>

            <div className='mt-20 mx-2 block md:hidden'>
                <img src="../infinity.svg" alt="" />
                <div className='mt-5'>
                    <h3 className='text-blue-500 text-3xl'>EMPATHIZE</h3>
                    <p className='text-2xl'>Innovation should be human-centered.</p>
                </div>
                <div className='mt-5'>
                    <h3 className='text-orange-400 text-3xl'>IDEATE</h3>
                    <p className='text-2xl'>Innovation is born from a cash of ideas.</p>
                </div>

                <div className='mt-5'>
                    <h3 className='text-green-500 text-3xl'>DEFINE</h3>
                    <p className='text-2xl'>Innovation should solve a problem.</p>
                </div>

                <div className='mt-5'>
                    <h3 className='text-purple-500 text-3xl'>TEST</h3>
                    <p className='text-2xl'>Innovation should be refined.</p>
                </div>

                <div className='mt-5'>
                    <h3 className='text-red-600 text-3xl'>PROTOTYPE</h3>
                    <p className='text-2xl'>Innovation should be refined.</p>
                </div>
            </div>

            <div className='hidden md:flex justify-between items-center'>
                <div className='mt-20'>
                    <h3 className='text-3xl  text-blue-400 mb-2'>EMPATHIZE</h3>
                    <p className='text-3xl tracking-wide'>Innovation should be <br /> human-centered.</p>
                </div>

                <div className='mt-20'>
                    <h3 className='text-3xl  text-orange-500 mb-2'>IDEATE</h3>
                    <p className='text-3xl tracking-wide'>Innovation is born from a<br /> cash of ideas.</p>
                </div>
            </div>

            <img className='hidden md:flex mx-auto mt-5' src="../infinity.svg" />

            <div className='hidden md:flex justify-between items-center'>
                <div className='mt-20'>
                    <h3 className='text-3xl  text-blue-400 mb-2'>DEFINE</h3>
                    <p className='text-3xl tracking-wide'>Innovation should be <br /> human-centered.</p>
                </div>

                <div className='mt-20'>
                    <h3 className='text-3xl  text-orange-500 mb-2'>TEST</h3>
                    <p className='text-3xl tracking-wide'>Innovation is born from a<br /> cash of ideas.</p>
                </div>

                <div className='mt-20'>
                    <h3 className='text-3xl  text-blue-400 mb-2'>PROTOTYPE</h3>
                    <p className='text-3xl tracking-wide'>Innovation should be <br /> human-centered.</p>
                </div>
            </div>
        </div>
    )
}

export default Desing