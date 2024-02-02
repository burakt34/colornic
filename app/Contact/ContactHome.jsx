"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ContactHome = () => {
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
  return (
    <div className='px-4 md:px-20 mt-28 font-helvetica'>
        <h1 data-aos="fade-up" className='text-6xl lg:text-8xl font-semibold tracking-tight'>Contact</h1>
        <div>
        <iframe data-aos="fade-up" className='w-full h-[85vh] mt-20 rounded-2xl outline-0 border-none' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3010.0825448463324!2d29.126597!3d41.02345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9bf107aba8d%3A0x5af99b7e2004cb13!2sJUSTWork!5e0!3m2!1str!2str!4v1706877031259!5m2!1str!2str" width="800" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <h3 data-aos="fade-up" className='text-4xl xl:text-6xl tracking-tighter flex flex-wrap w-full gap-4 mt-20'>COLORNIC REKLAM TASARIM ILETISIM HIZMETLERI TICARET LIMITED SIRKETLERI</h3>
        </div>
    </div>
  )
}

export default ContactHome