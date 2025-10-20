import React from 'react'


const HeroContainer = () => {
  return (
    <div className='w-4/12 h-[90vh] flex-col justify-between items-start flex gap-8'>
        <div className=''>
            <h1 className='py-16 text-7xl tracking-widest leading-[90px]'>Prospective <br /><span className='px-2 pb-2 bg-gray-200 rounded-full'>customer</span><br />Segmentation</h1>
            <p className='mt-[-40px] text-gray-600'>Depending on Customer <br />Satisfaction and access <br />to banking products, potential <br />target audiences can be divided <br />into the groups</p>
        </div>
        <div className='mb-14 text-8xl'>
            <i className="ri-arrow-right-up-line"></i>
        </div>
    </div>
  )
}

export default HeroContainer