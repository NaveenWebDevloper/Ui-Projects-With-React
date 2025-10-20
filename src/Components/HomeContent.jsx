import React from 'react'
import HeroContainer from './HeroContainer'
import CardContainer from './CardContainer'

const HomeContent = (props) => {
  return (
    <div className='px-14 flex justify-between gap-12'>
        <HeroContainer  />
        <CardContainer CardsArray={props.CardsArray} />
    </div>
  )
}

export default HomeContent