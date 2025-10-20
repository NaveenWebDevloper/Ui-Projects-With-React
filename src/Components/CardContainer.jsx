import React from 'react'
import CardContent from './CardContent'

const CardContainer = (props) => {
  return (
    <div id='scroll-remove' className=' w-3/4 h-[90vh] p-10 flex gap-4 overflow-x-scroll'>
     {props.CardsArray.map((card, index) => (
       <CardContent key={index} id={index + 1} card={card} />
     ))}
    </div>
  )
}

export default CardContainer