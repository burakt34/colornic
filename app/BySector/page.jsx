import React from 'react'
import BySector from './BySector'
import ProcessBar from '../Components/ProcessBar/ProcessBar'
import Header from '../Components/Header/Header'

const page = () => {
  return (
    <div>
        <ProcessBar />
        <Header />
        <BySector />
    </div>
  )
}

export default page