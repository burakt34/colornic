import React from 'react'
import HomeSection from './HomeSection'
import Header from '../Components/Header/Header'
import WorkSection from './WorkSection'
import MoreLink from './MoreLink'
import SeviceSection from './SeviceSection'
import Footer from '../Components/Footer/Footer'
import ClientSection from './ClientSection'
import MethodSection from './Methodsection'

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Header />
            <HomeSection />
            <WorkSection/>
            <MoreLink/>
            <SeviceSection/>
            <MethodSection/>
            <ClientSection/>
            <Footer/>
        </div>
    )
}

export default Home