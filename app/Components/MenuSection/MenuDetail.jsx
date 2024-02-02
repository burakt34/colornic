import React from 'react'
import ProcessBar from '../ProcessBar/ProcessBar'
import Header from '../Header/Header'
import MenuHome from './MenuHome'
import MenuLinks from './MenuLinks'

const MenuDetail = () => {
    return (
        <div className='min-h-screen'>
            <ProcessBar />
            <Header />
            <MenuHome/>
            <MenuLinks/>
        </div>
    )
}

export default MenuDetail