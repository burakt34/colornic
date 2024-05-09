import React from 'react'
import HomeSection from './HomeSection'
import Header from '../Components/Header/Header'
import WorkSection from './WorkSection'
import MoreLink from './MoreLink'
import SeviceSection from './SeviceSection'
import Footer from '../Components/Footer/Footer'
import ClientSection from './ClientSection'
import MethodSection from './Methodsection'
import ProcessBar from '../Components/ProcessBar/ProcessBar'
// import CardsParallax from './CardsParallax'
import CardsParallax2 from './CardsParallax2/CardsParallax2'
import Blog from './Blog'


const Home = () => {
    return (
        <div className='min-h-screen'>
            <ProcessBar />
            <Header />
            <HomeSection />
            {/* <WorkSection /> */}
            {/* <CardsParallax /> */}
            <CardsParallax2 />
            <MoreLink />
            <SeviceSection />
            <MethodSection />
            <ClientSection />
            <Blog/>
            <Footer />
        </div>
    )
}

export default Home