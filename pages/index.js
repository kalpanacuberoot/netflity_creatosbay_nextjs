/* eslint-disable react-hooks/rules-of-hooks */
import Home from '@/components/Home';
import Layout from '@/components/Layout';
import Mobile_splash_screen_slider from '@/components/mobile_splash_screen_slider';
import Splash_screen_slider from '@/components/splash_screen_slider';
import Images from '@/images';
import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';


const index = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg'];
  const items = [
    { content: Images.a },
    { content: 'Item 2' },
    { content: 'Item 3' },
    { content: 'Item 4' },
    { content: 'Item 5' },
    { content: 'Item 6' },
    { content: 'Item 7' },
    { content: 'Item 8' },
    { content: 'Item 9' },
    // Add more items as needed
  ];
  return (
    <>
      <div className=' container flex flex-row h-screen justify-between items-center'>
        <div className='auto-cols-max h-screen border children_layout'>
          <Layout>
            <Home />
          </Layout>
        </div>
        <div className='auto-cols-max h-screen splash_slider border w-3/8'>
          <Splash_screen_slider />
        </div>
      </div>

      {/* {isMobile ?
        <div className=' container h-full'>
          <div className='auto-cols-max w-full h-screen'>
            <Layout>
              <Home />
            </Layout>
          </div>

          <div className=' slide_screen h-auto '>

            <Mobile_splash_screen_slider />
          </div>


        </div>
        :
        <>
          <div className=' container flex flex-row h-screen'>
            <div className='auto-cols-max w-2/3 h-screen'>
              <Layout>
                <Home />
              </Layout>
            </div>

            <div className='auto-cols-max h-screen'>
              <Splash_screen_slider />
            </div>
          </div>
        </>} */}
      {/* <div className=' container h-screen splash_screen'>
        <div className='auto-cols-max h-screen'>
          <Layout>
            <Home />
          </Layout>
        </div>
        <div className='auto-cols-max h-screen w-1/3 '>
          {isMobile ?

            <Mobile_splash_screen_slider images={images} /> : <Splash_screen_slider />}
          <div className='hidden md:block'>
            <Splash_screen_slider />
          </div>
          <div className='hidden lg:block'>
          <Mobile_splash_screen_slider />
          </div>
        </div>
      </div> */}
    </>
  )
}

export default index