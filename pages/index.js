import Home from '@/components/Home';
import Layout from '@/components/Layout';
import Mobile_splash_screen_slider from '@/components/mobile_splash_screen_slider';
import Splash_screen_slider from '@/components/splash_screen_slider';
import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const index = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg'];
  return (
    <>

      {/* <div className=' container h-screen splash_screen'>
        <div className='auto-cols-max w-2/3 h-screen'>
          <Layout>
            <Home />
          </Layout>
        </div>
        <div className='auto-cols-max h-screen w-1/3 slide_screen'>
          <Splash_screen_slider />
        </div>
      </div> */}
      <div className=' container h-screen splash_screen'>
        <div className='auto-cols-max h-screen'>
          <Layout>
            <Home />
          </Layout>
        </div>
        <div className='auto-cols-max h-screen w-1/3 '>
        {isMobile ? 
        
        <Mobile_splash_screen_slider  images={images}/> : <Splash_screen_slider />}
          {/* <div className='hidden md:block'>
            <Splash_screen_slider />
          </div>
          <div className='hidden lg:block'>
          <Mobile_splash_screen_slider />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default index