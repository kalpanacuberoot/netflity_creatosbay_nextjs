/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Home from '@/components/Home';
import Layout from '@/components/Layout';
import Splash_screen_slider from '@/components/splash_screen_slider';
import Modal_onboarding_screens from '@/components/userAuth/Modal_onboarding_screens';
import Onbording_content from '@/components/userAuth/Modal_onboarding_screens/Onbording_content';
import Tab1 from '@/components/userAuth/Modal_onboarding_screens/Tab1';
import Tab2 from '@/components/userAuth/Modal_onboarding_screens/Tab2';
import Tab3 from '@/components/userAuth/Modal_onboarding_screens/Tab3';
import Cookies from "js-cookie";
import Marketplace_popupcontent from '@/components/Marketplace_page/Marketplace_filterpopup/Marketplace_popupcontent';


const index = () => {

  return (
    <>

      <div className=' flex flex-row justify-between items-center'>
        <div className='auto-cols-max h-screen border children_layout'>
          <Layout>
            <Home />
            {/* <Marketplace_popupcontent/> */}
          </Layout>
        </div>
        <div className='auto-cols-max h-screen splash_slider border w-3/8'>
          <Splash_screen_slider />

        </div>
      </div>


    </>
  )
}

export default index