import React from 'react'
import Section1 from './Components/Section1'

const App = () => {

  const CardsArray = [
    {paragraph: "Prime customers, that have access to bank credit and are satisfied with the current product", title: "Satisfied", img: "https://i.pinimg.com/1200x/0e/a5/32/0ea532dd54e08bb88fa8333ddd4e492f.jpg", color: "#D97C68"},
    {paragraph: "Prime customers, that have access to bank credit and are satisfied with the current product", title: "Satisfied", img: "https://i.pinimg.com/736x/ee/50/6d/ee506d67e40e0f88d4800fd92c7d1ed9.jpg", color: "#F7D568"},
    {paragraph: "Customers from near-prime and subprime segments who are dissatisfied with their current product", title: "Dissatisfied", img: "https://i.pinimg.com/736x/d8/eb/18/d8eb18eab91b008134a8dcdd2d377384.jpg", color: "#4D8194"},
    {paragraph: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", title: "Satisfied", img: "https://i.pinimg.com/736x/1a/a0/88/1aa08838367f6ed9a8f42a5aec6425c7.jpg", color: "#4D8194"},
  ]
  return (
    <div className='text-2xl font-bold'>
      <Section1  CardsArray={CardsArray}/>
    </div>
  )
}

export default App