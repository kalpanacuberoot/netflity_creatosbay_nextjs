import Home from '@/components/Home'
import Layout from '@/components/Layout'
import Splash_screen_slider from '@/components/splash_screen_slider'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <>

      <div className=' container flex flex-row h-screen'>
        <div className='auto-cols-max w-2/3 h-screen'>
          <Layout>
            <Home />
          </Layout>
        </div>
        <div className='auto-cols-max h-screen '>
          <Splash_screen_slider />
        </div>
      </div>
    </>
  )
}

export default index