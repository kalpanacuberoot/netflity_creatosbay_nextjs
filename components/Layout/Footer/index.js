import Colors from '@/styles/Colors'
import React from 'react'

const Footer = () => {
  return (
    <div 
    className=' bg-zinc-100'
    // style={{ backgroundColor: Colors.button_light_clr }}
    >
      <div className="flex align-center w-80 justify-evenly h-20 items-center "
       >
        <h6 style={{ color: Colors.pink_clr }}>Imprint</h6>
        <h6 style={{ color: Colors.pink_clr }}>Terms of use</h6>
        <h6 style={{ color: Colors.pink_clr }}>Dribble</h6>
      </div>
    </div>

  )
}

export default Footer
