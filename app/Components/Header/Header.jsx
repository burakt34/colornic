import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
    return (
        <div className='flex justify-between items-center px-4 md:px-20 py-10'>
            <Logo />
            <Menu />
        </div>
    )
}

export default Header