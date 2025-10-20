import React from 'react'
import Navleft from './navleft'
import Navright from './Navright'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full h-[100px] px-14'>
        <Navleft />
        <Navright />
    </div>
  )
}

export default Navbar