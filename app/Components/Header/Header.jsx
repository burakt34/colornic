"use client"
import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import { useEffect, useState } from 'react';


const Header = () => {
    const [isNavbarVisible, setNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrolledDown = currentScrollPos > prevScrollPos;

            setNavbarVisible(!isScrolledDown || currentScrollPos < 10); // Navbar'ın gizlenip gösterilme koşulları

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (

        <nav className={`px-4 md:px-20 py-10 transition-all duration-300 ${isNavbarVisible ? 'opacity-100' : 'opacity-0'} fixed top-0 left-0 w-full bg-white z-10`}>

            <div className='flex justify-between items-center'>
                <Logo />
                <Menu />
            </div>
        </nav>
    )
}

export default Header