import Images from '@/images'
import Colors from '@/styles/Colors'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div
            className="flex flex-col justify-center pl-10 height-15 "
            style={{ backgroundColor: Colors.white_clr }}
          >
            <Image
             src={Images.company_logo} 
             alt="" 
             width={60} />
          </div>
    </div>
  )
}

export default Navbar
