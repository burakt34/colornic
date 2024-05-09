import React from 'react'
import ProcessBar from '../Components/ProcessBar/ProcessBar'
import Header from '../Components/Header/Header'
import ByService from './ByService'

const page = () => {
  return (
    <div>
        <ProcessBar />
        <Header />
        <ByService />
    </div>
  )
}

export default page