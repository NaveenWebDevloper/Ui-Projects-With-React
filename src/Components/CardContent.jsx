import React from 'react'

const CardContent = (props) => {
  return (
    <div >
       <div className='w-80 h-full rounded-[22px] relative overflow-hidden'>
            <img className='object-cover h-full' src={props.card.img} alt="" />
            <div className='w-full h-full absolute flex flex-col justify-between p-6 z-10 top-0 left-0'>
                <div className=''>
                    <h1 style={{backgroundColor: props.card.color}} className=' w-10 h-10 p-4 rounded-full flex items-center justify-center'>{props.id }</h1>
                </div>
                <div className='pb-10 flex flex-col gap-16'>
                    <p className='text-zinc-200 font-semibold'>{props.card.paragraph}</p>
                    <div className='flex justify-between mt-[-10px]'>
                        <button style={{ backgroundColor: props.card.color }} className='px-4 py-2 rounded-full'>{props.card.title}</button><button style={{backgroundColor: props.card.color}} className=' px-3 py-1 rounded-full'><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardContent