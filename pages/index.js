/* eslint-disable react-hooks/rules-of-hooks */
import Home from '@/components/Home';
import Layout from '@/components/Layout';
import Mobile_splash_screen_slider from '@/components/mobile_splash_screen_slider';
import Splash_screen_slider from '@/components/splash_screen_slider';
import Modal_onboarding_screens from '@/components/userAuth/Modal_onboarding_screens';
import Onbording_content from '@/components/userAuth/Modal_onboarding_screens/Onbording_content';
import Tab1 from '@/components/userAuth/Modal_onboarding_screens/Tab1';
import Tab2 from '@/components/userAuth/Modal_onboarding_screens/Tab2';
import Tab3 from '@/components/userAuth/Modal_onboarding_screens/Tab3';
import Images from '@/images';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'flowbite';

const index = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  useEffect(() => {
    openModal();
    // setIsModalOpen(true)
  },[])
const tabs = [
  {
    title: '',
    content:<Tab1 />,
  },
  {
    title: '',
    content: <Tab2/>,
  },
  {
    title: '',
    content: <Tab3/>,
  },
];
const closeModal = () => {
  setIsModalOpen(false);
};

  return (
    <>
     {/* <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() =>openModal()}
      >
        Open Modal
      </button> */}
      <Modal_onboarding_screens isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="relative w-full max-w-4xl max-h-full min-w-xl min-h-0">

          <Onbording_content  tabs={tabs}  isOpen={isModalOpen} onClose={closeModal}/>
        </div>
      </Modal_onboarding_screens>
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