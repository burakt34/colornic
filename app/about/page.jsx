import React from 'react'
import Header from '../Components/Header/Header'
import AboutHome from './AboutHome'
import ProcessBar from '../Components/ProcessBar/ProcessBar'
import AboutClientSection from './AboutClientSection'
import AboutSomeClient from './AboutSomeClient'
import Footer from '../Components/Footer/Footer'

const about = () => {
  return (
    <div>
        <ProcessBar/>
        <Header/>
        <AboutHome/>
        <AboutClientSection/>
        <AboutSomeClient/>
        <Footer/>
    </div>
  )
}

export default about