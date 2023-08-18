import Colors from '@/styles/Colors'
import React from 'react'

const Footer = () => {
  return (
    <div 
    className=' bg-zinc-100  '
    // style={{ backgroundColor: Colors.button_light_clr }}
    >
      <div className="flex align-center justify-evenly items-center  height-13  w-80"
       >
        <h6 
        style={{ color: Colors.pink_clr }}
        className='text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl'
        >Imprint</h6>
        <h6 style={{ color: Colors.pink_clr }}
         className='text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl'
        >Terms of use</h6>
        <h6 style={{ color: Colors.pink_clr }}
         className='text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl'
        >Dribble</h6>
      </div>
    </div>

  )
}

export default Footer
