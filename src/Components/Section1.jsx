import React from 'react'
import Navbar from './Navbar/Navbar'
import HomeContent from './HomeContent'

const Section1 = (props) => {
  return (
    <div>
        <Navbar />
        <HomeContent CardsArray={props.CardsArray} />
    </div>
  )
}

export default Section1