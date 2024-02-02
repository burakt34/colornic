import React from 'react'
import Header from '../Components/Header/Header'
import ProcessBar from '../Components/ProcessBar/ProcessBar'
import ContactHome from './ContactHome'
import ContactFooter from './ContactFooter'

const Contact = () => {
  return (
    <div>
        <ProcessBar/>
        <Header/>
        <ContactHome/>
        <ContactFooter/>
    </div>
  )
}

export default Contact