import React from 'react'
import Header from '../Components/Header/Header'
import ProcessBar from '../Components/ProcessBar/ProcessBar'
import ServicesHomeSection from './ServicesHomeSection'
import ServicesList from './ServicesList'
import MethodSection from '../Home/Methodsection'
import Desing from './Desing'
import Footer from '../Components/Footer/Footer'

const Services = () => {
  return (
    <div className='min-h-screen'>
        <ProcessBar/>
        <Header/>
        <ServicesHomeSection/>
        <ServicesList/>
        <MethodSection/>
        <Desing/>
        <Footer/>
    </div>
  )
}

export default Services